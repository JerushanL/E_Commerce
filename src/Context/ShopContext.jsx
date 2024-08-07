import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = ({ children }) => {

    const addToCart = (itemId) => {
        SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        
    }
    const removeFromCart = (itemId) => {
        SetCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmound = ()=> {
        let totalAmound = 0;
        for (const item in cartItem)
            if(cartItem[item] > 0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                  totalAmound += itemInfo.new_price * cartItem[item]   
                //   console.log("itemInfo",itemInfo);
            }
            return totalAmound      
    }
     
    const getTotalCartItems = ()=>{
        let totalItem = 0 
        for( const item in cartItem)
            if(cartItem[item] > 0){
                totalItem += cartItem[item]
                console.log("ans",totalItem);
            }
            return totalItem
    }
    

    const [cartItem, SetCartItem] = useState(getDefaultCart())
    const contextValue = { all_product, cartItem, SetCartItem, addToCart, removeFromCart ,getTotalCartAmound,getTotalCartItems}



    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider
