import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './FoodItem.css';
import { assets } from '../../assets/assets.js';
import { StoreContext } from '../../context/StoreContext.jsx';

const FoodItem = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, deleteFromCart, url } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <Link to={`/food/${id}`} className="food-item-link">
        <div className="food-item-image-container">
          <img className='food-item-image' src={url + 'images/' + image} alt={name} />
          {
            !cartItems[id]
              ? <img className='add' onClick={(e) => { e.preventDefault(); addToCart(id); }} src={assets.add_icon_white} />
              : <div className="food-item-counter">
                  <img onClick={(e) => { e.preventDefault(); deleteFromCart(id); }} src={assets.remove_icon_red} alt="" />
                  {cartItems[id]}
                  <img onClick={(e) => { e.preventDefault(); addToCart(id); }} src={assets.add_icon_green} alt="" />
                </div>
          }
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            {name}
            <img src={assets.rating_starts} alt="rating" />
          </div>
          <p>{description}</p>
          <p>${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default FoodItem;