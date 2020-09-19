import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import {getBasketTotal} from '../Reducer';

function SubTotal() {
    const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        decimalScale={2}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default SubTotal;
