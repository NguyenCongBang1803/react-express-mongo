import React, { createContext,useState } from 'react';
import {useNavigate} from "react-router-dom";

export const ShopContext = createContext()
const ShopContextProvider = ({children}) => {
    const [user, setUser] = useState('user')
    const navigate = useNavigate();
    const value={
        navigate,
        user,
        setUser,
    }
    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
