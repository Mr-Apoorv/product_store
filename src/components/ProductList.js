import React from "react";
import { useSelector } from "react-redux";
// import store from "../redux/store";
import { Link } from "react-router-dom";
// import { getProduct } from "../redux/actions/productActions";
// import { setReducer } from "../redux/reducers/productReducers";

export default function ProductList() {
  const myState = useSelector((state) => state.setReducer);
  // const dispatch = useDispatch();

  // let filteredProducts = store.getState().setReducer.filter((product) => {
  //   return true;
  // });
  // console.log(store.getState().setReducer, myState, "State data value");
  return (
    <div className="row">
      {myState.map((product) => {
        return (
          <div
            key={product.id}
            className="col-sm-12 col-md-6 col-lg-4 my-5 "
            // onClick={
            //   //   (dispatch(getProduct(product.id)),
            //   console.log(product.id, "product id")
            // }
          >
            <div
              className="card shadow-lg "
              style={{ width: "18rem", height: "30rem" }}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt="product image"
                style={{ width: "200px", margin: "15px auto", height: "200px" }}
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
  );
}
