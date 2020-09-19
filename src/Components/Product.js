import React, { useState, useEffect, useRef } from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const idRef = useRef(null);

  useEffect(()=>{
    console.log('Hello');
  },[addToBasket])

  const addToBasket = (e) => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        count:1
      },
    });
    idRef.current.innerText = "Added to Basket";
    idRef.current.setAttribute("disabled", true);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <small>#{id}</small>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket} ref={idRef}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
