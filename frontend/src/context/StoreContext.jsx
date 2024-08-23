import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const[cartItems,setCartItems] = useState({});
    const [token,setToken] = useState("");
    const navigate = useNavigate();
    const url = "http://localhost:4000/";
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    useEffect(() => {
        if(localStorage.getItem("token"))
            setToken(localStorage.getItem("token"))
    },[]);

    
    const getTotalCartAmount = () => {
        let total = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                const food = food_list.find((food) => food._id === item)
                total += food.price * cartItems[item];
            }
        }

        return total;
    }

    const LogOut = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    const getDeliveryFee = () => {
        let amount = getTotalCartAmount();
        if(amount === 0)
            return 0;
        else if (amount >= 50)
            return "free delivery"
        else    
            return 2;
    }

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems({...cartItems,[itemId] : 1});
        }
        else
        {
            setCartItems((prev) => ({...prev,[itemId] : prev[itemId]+1}));
        }
    }

    const deleteFromCart = (itemId) => {
       setCartItems((prev) => ({...prev,[itemId] : prev[itemId]-1}));
    }


    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        deleteFromCart,
        getTotalCartAmount,
        getDeliveryFee,
        url,
        token,
        setToken,
        LogOut
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;