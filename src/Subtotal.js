import React from 'react'
import { useStateValue } from './StateProvider'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {Link, useHistory } from 'react-router-dom';
import {getBasketTotal} from './reducer';

function Subtotal() {
    const history = useHistory();
    const [{basket, user} ] = useStateValue();
    const checkLogIn = () => {
        if(!user) {
          alert("Sign In ")
          history.push("/login");
        }
    }
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
              <>
                <p>
                    Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
                </p>
                <small className="subtotal_gift">
                <input type="checkbox"/> This order contains a gift
                </small>
              </>  
            )}
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               tousandSeparator={true}
               prefix={"$"}
               />
            <button onClick={checkLogIn}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
