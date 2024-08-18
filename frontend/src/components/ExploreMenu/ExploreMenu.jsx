import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets.js'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis est officiis! Amet qui sed fugit rem, enim suscipit veniam!</p>
        <div className="explore-menu-list">
            {
                menu_list.map((item,index,arr) => {
                    return(
                        <div key={index} className="explore-menu-item" 
                        onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}>

                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
                            <p>{item.menu_name}</p>

                        </div>
                    );
                })
            }
        </div>
    </div>
  )
}

export default ExploreMenu