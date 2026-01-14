import React, { useReducer } from "react";
import { products } from "../products";
import { myReducer } from "./myReducer";
export default function ReducerHook() {
  // this useReducer hook  will accept two arguments
  // reducerFunction, initialState(Array, Object)
  const [productList, dispatch] = useReducer(myReducer, products);
  return (
    <div>
      {productList.map((product) => {
        return (
          <div
            className="d-flex justify-content-center align-items-center"
            key={product.id}
          >
            <div className="imgCont">
              <img src={product.img} alt="" />
            </div>
            <div className="desc">
              <p>
                <b>Name:{product.name}</b>
              </p>
              <p>
                <b>Quantity:{product.qty}</b>
              </p>
            </div>
            <div
              className="button btn btn-success mx-1"
              onClick={() =>
                dispatch({ type: "increase", payload: product.id })
              }
            >
              +
            </div>
            <div
              className="button btn btn-danger mx-1"
              onClick={() =>
                dispatch({ type: "decrease", payload: product.id })
              }
            >
              -
            </div>
          </div>
        );
      })}
    </div>
  );
}
