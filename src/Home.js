import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Components/Product";
import { data } from "./Data.json";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__row">
          {data.map((item, index) => (
            <Product key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
          {/* <Product
            id="123456"
            title="The Lean Startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="234567"
            title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
          <Product
            id="345678"
            title="Mi Band 3 (Black)"
            price={18.65}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZIrJ6XLLL._SX569_.jpg"
            rating={3}
          />
          <Product
            id="456789"
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
