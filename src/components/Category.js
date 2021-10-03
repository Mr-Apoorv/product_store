import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import store from "../redux/store";
// import { useDispatch } from "react-redux";
// import { getProduct } from "../redux/actions/productActions";
// import { setReducer } from "../redux/reducers/productReducers";

export default function Category() {
  let { category } = useParams();
  // console.log("category is", category);

  const getCategoryId = (category) => {
    if (category === "electronics") {
      return "electronics";
    } else if (category === "jewelery") {
      return "jewelery";
    } else if (category === "women_clothing") {
      return "women's clothing";
    } else if (category === "men_clothing") {
      return "men's clothing";
    } else {
      return "notDefined";
    }
  };

  // const dispatch = useDispatch();
  let filteredProducts = store.getState().setReducer.filter((product) => {
    return product.category === getCategoryId(category);
  });
  return (
    <div className="container">
      <div className="container d-flex mt-5 justify-content-center">
        <h4 className="my-3 mx-3">Product category</h4>
        <div className="dropdown my-3">
          <button
            className="btn btn-dark dropdown-toggle btn-large"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link className="dropdown-item" to="/categories/electronics">
                electronics
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/categories/jewelery">
                jewelery
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/categories/women_clothing">
                women's clothing
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/categories/men_clothing">
                men's clothing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="row my-3">
        {filteredProducts.map((product) => {
          return (
            <div
              key={product.id}
              className="col-sm-12 col-md-6 col-lg-4 my-5"
              // onClick={
              //   (dispatch(getProduct(product.id)),
              //   console.log(product.id, "product id"))
              // }
            >
              <div
                className="card shadow"
                style={{ width: "18rem", height: "30rem" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="product image"
                  style={{
                    width: "200px",
                    margin: "15px auto",
                    height: "200px",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.category}</p>
                  <p className="card-text">Price : {product.price}</p>
                </div>

                <button className="btn btn-dark">
                  <Link
                    to={`product/${product.id}`}
                    className="text-decoration-none fw-bold text-light"
                  >
                    Product details
                  </Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
