import { createContext, useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const[cartItems,setCartItems] = useState({});
    const [token,setToken] = useState("");
    const [food_list,setFoodList] = useState([]);

    const navigate = useNavigate();

    const url = "http://localhost:4000/";

    const fetchFoodList = async () => {
        const responce = await axios.get(url+'api/food/list')
        setFoodList(responce.data.data);
    }

    const loadCartData = async (token) => {
        const responce = await axios.get(url+'api/cart/get',{headers : {token}})
        console.log(responce.data.cartData || []);
        setCartItems(responce.data.cartData || []);
    }


    // useEffect(() => {
    //     console.log(cartItems);
    // }, [cartItems]);

    useEffect(() => {
        async function loadData(){
            await fetchFoodList();
            if(localStorage.getItem("token"))
            {
                setToken(localStorage.getItem("token"))
                await loadCartData(localStorage.getItem("token"));
            }
        }

        loadData();
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

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]){
            setCartItems({...cartItems,[itemId] : 1});
        }
        else
        {
            setCartItems((prev) => ({...prev,[itemId] : prev[itemId]+1}));
        }
        if(token)
        {
            await axios.post(url+'api/cart/add', { itemId }, { headers: { token } });
        }
    }

    const deleteFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if(token)
            await axios.post(url+'api/cart/remove',{itemId},{headers : {token}});
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