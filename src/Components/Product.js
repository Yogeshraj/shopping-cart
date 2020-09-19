import React from "react";
import './Product.css';
import {useStateValue} from '../StateProvider';

function Product({id, title, price, image, rating}) {
  const [{basket}, dispatch] = useStateValue();
  const addToBasket = () =>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
        count:1
      },
    })
  }
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
            {Array(rating).fill().map((_, i)=>(
              <span key={i} role="img" aria-label="star">⭐</span>
            ))}
          </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
