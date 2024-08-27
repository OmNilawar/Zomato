import React, { useContext, useEffect, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';

const LoginPopUp = ({ showLogin, setShowLogin }) => {

    const [currState, setCurrState] = useState("Login");
    const { url, setToken } = useContext(StoreContext)
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const [showPassword, setShowPassword] = useState(false);

    const onLogin = async (e) => {
        e.preventDefault();
        let newUrl = url;
        newUrl += currState === "Login" ? "api/user/login" : "api/user/register";

        try {
            const responce = await axios.post(newUrl, data);
            if (responce.data.status) {
                setToken(responce.data.token);
                localStorage.setItem("token", responce.data.token);
                setShowLogin(false);
                alert(responce.data.message);
            }
            else {
                alert(responce.data.message);
                console.log(responce.data.message);
            }
        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={onLogin}>
                <div className="login-popup-title">
                    <p>{currState}</p>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currState === "Login" ? <></> : <input type="text" name='name' value={data.name} onChange={changeHandler} placeholder='your name' required />}
                    <input
                        type="text"
                        name='email'
                        value={data.email}
                        onChange={changeHandler}
                        placeholder='your email'
                        required
                    />
                    <div className="password-sec">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={data.password}
                            onChange={changeHandler}
                            placeholder='enter password'
                            required
                        />
                        <img onClick={() => setShowPassword(!showPassword)}  src={showPassword ? assets.close_eye : assets.open_eye} alt="" />
                    </div>
                </div>

                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing,I accept terms and privacy policy</p>
                </div>
                <button id='login-popup-button' type="submit">{currState === "Sign Up" ? "create account" : "Login"}</button>

                {currState === "Login"
                    ? <p>Create new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPopUp