import React, { useContext } from 'react'
import { useState} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets.js'
import { StoreContext } from '../../context/StoreContext.jsx'
const FoodItem = ({id,name,description,price,image}) => {

    const {cartItems,addToCart,deleteFromCart,url} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-image-container">
            <img className='food-item-image' src={url+'images/'+image} alt={name} />
            {
                !cartItems[id]
                ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
                : <div className="food-item-counter">
                    <img onClick={() => deleteFromCart(id)} src={assets.remove_icon_red} alt="" />
                    {cartItems[id]}
                    <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                {name}
                <img src={assets.rating_starts}/>
            </div>
            <p className="food-item-desc">{description}</p>
            {/* {console.log(description)} testing purpose karan pahile load hot navta */}
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem;