import React, { useState,useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { dummyProducts } from '../assets/assets'
import toast from 'react-hot-toast';

const AppContext = React.createContext()
export default function AppContextProvider({ children }) {
   
   const currency =import.meta.env.VITE_CURRENCY;
   
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchQuery, setSearchQuery] = useState({});
    const navigate = useNavigate();
    const fetchProducts = async ()=>{
        setProducts(dummyProducts);
    }


    // fetchAllProduct
    useEffect(()=>{fetchProducts()},[])
    

    // Add to cart 
    const addToCard=(itemId)=>{
        let cartData = structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId]+=1;
        }else{
            cartData[itemId]=1;
        }
        setCartItems(cartData);
        toast.success('Added to cart')

    }

    // Update Quantity cart items 
    const updateCartItems=(itemId,itemQuantity)=>{
        let cartData= structuredClone(cartItems)
        cartData[itemId] = itemQuantity+1
        setCartItems(cartData)
        toast.success('Cart updated')
    }

    // Remove Items from cart
    const removeFromCart=(itemId)=>{
        let cartData=structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId]-=1
            if(cartData[itemId]===0){
                delete cartData[itemId]
            }
        }
        setCartItems(cartData)
        toast.success('item deleted')
    }
    
    const value = {
        user, setUser, isSeller, setIsSeller,showUserLogin, setShowUserLogin, navigate,products,setProducts,addToCard,updateCartItems,removeFromCart,cartItems,searchQuery,setSearchQuery,currency
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext = () => {
    return useContext(AppContext);
}
