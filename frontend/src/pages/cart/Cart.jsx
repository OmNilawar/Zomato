import React, { useContext,useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Cart.css'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const {cartItems,deleteFromCart,food_list,addToCart,getTotalCartAmount,getDeliveryFee,url} = useContext(StoreContext);
  
  const navigate = useNavigate();

  let delivery = getDeliveryFee();
  return (
    <div className='cart' id='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index) => {
          if(cartItems[item._id] > 0)
          {
            return(
              <>
                <div className='cart-items-title cart-item'>
                  <img src={url+'images/'+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className='add-image'>{cartItems[item._id]}<img onClick={() => addToCart(item._id)} src={assets.add_icon_green} alt="" /></p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className='remove' onClick={() => deleteFromCart(item._id)}>X</p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
          <button onClick={() => navigate('/order')}>Proceed to Checkout</button>
        </div>

        <div className="cart-promocode">
          <div className="promo-code">
            <p>Submit your promo code</p>
            <div className="promo-code-details">
              <input type="text" placeholder='promocode' />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart