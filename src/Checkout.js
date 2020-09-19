import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./Components/CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Components/SubTotal";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    // console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello {user ? user?.email : "Guest"}!</h3>
          <h2 className="checkout__title">Your Shopping basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              rating={item.rating}
              price={item.price}
              quantity={item.count}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right"><Subtotal /></div>
    </div>
  );
}

export default Checkout;
