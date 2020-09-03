import React from 'react'
import { useStateValue } from './StateProvider'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from './reducer';

function Subtotal() {
    const [{basket} ] = useStateValue();
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
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
