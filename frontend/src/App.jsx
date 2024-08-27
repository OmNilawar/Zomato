import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Cart from './pages/cart/Cart.jsx';
import PlaceOrder from './pages/placeOrder/PlaceOrder.jsx'
import Footer from './components/Footer/Footer.jsx';
import LoginPopUp from './components/LoginPopUp/LoginPopUp.jsx';
import FoodDetail from './components/FoodDetail/FoodDetail.jsx';

export const App = () => {

  const[showLogin,setShowLogin] = useState(false);
  
  return (
    <>
    {showLogin ? <LoginPopUp showLogin={showLogin} setShowLogin={setShowLogin}/> : <></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/food/:id' element={<FoodDetail />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export  default App;