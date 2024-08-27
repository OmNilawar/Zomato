import React, { useContext } from 'react';
import './FoodDetail.css'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const FoodDetail = () => {
  const { id } = useParams();
  const { food_list , url } = useContext(StoreContext);
  const foodItem = food_list.find(item => item._id === id);

  if (!foodItem) {
    return <div>Food item not found</div>;
  }

  return (
    <div className='food-detail'>
      <h1>{foodItem.name}</h1>
      <img src={url + 'images/' + foodItem.image} alt={foodItem.name} />
      <p>{foodItem.description}</p>
      <p>Price: ${foodItem.price}</p>
    </div>
  );
};

export default FoodDetail;