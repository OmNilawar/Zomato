import { createContext, useState } from "react";
import { food_list } from "../assets/assets";
import { useEffect } from "react";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const[cartItems,setCartItems] = useState({});

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

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
        deleteFromCart
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;