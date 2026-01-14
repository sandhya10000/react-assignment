import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [cartList, setCartList] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      const carts = await axios.get("https://fakestoreapi.com/carts");
      // when we call api , it will return data along with header metadata
      // but we need only data
      const cartData = await carts.data;
      setCartList(cartData);
    };
    fetchCart();
  }, []);
  return (
    <div>
      {Array.isArray(cartList) &&
        cartList.map((curCart) => (
          <ul className="list-group w-50 mb-3" key={curCart.id}>
            <li className="list-group-item">UserId:{curCart.userId}</li>
            <li className="list-group-item">Date:{curCart.date}</li>
          </ul>
        ))}
    </div>
  );
}
