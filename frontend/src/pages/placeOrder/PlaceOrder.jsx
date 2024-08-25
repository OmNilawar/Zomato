import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount,getDeliveryFee} = useContext(StoreContext);

  const delivery = getDeliveryFee();

  return (
    <div>
      <form className='place-order'>
        <div className="place-order-left">
          <p className="title">Delivery Details</p>
          <div className="multi-feilds">
            <input type="text" placeholder='First Name' re/>
            <input type="text" placeholder='Last Name' />
          </div>

          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Street' />
          <input type='text' placeholder='(Land Mark)' />
          <div className="multi-feilds">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>

          <div className="multi-feilds">
            <input type="text" placeholder='Zip-Code' />
            <input type="text" placeholder='Country' />
          </div>

          <input type="text" placeholder='Phone' />
        </div>

        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{delivery === "free delivery" ? "free delivery" : `$${delivery}`}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>${delivery === "free delivery" ? getTotalCartAmount() : getTotalCartAmount() + delivery}</p>
              </div>
            </div>
            <button>Proceed to Payment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder