import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({showLogin,setShowLogin}) => {

    const [currState,setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <p>{currState}</p>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState === "Login" ? <></> : <input type="text" placeholder='your name' required />}
                <input type="text" placeholder='your email' required/>
                <input type="password" placeholder='enter password' required/>
            </div>
           
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing,I accept terms and privacy policy</p>
            </div>
            <button id='login-popup-button'>{currState === "Sign Up" ? "create account" : "Login"}</button>
            
            {currState==="Login" 
            ? <p>Create new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
            : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
            }
           
            
        </form>
    </div>
  )
}

export default LoginPopUp