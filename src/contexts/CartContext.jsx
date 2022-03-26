import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const CartContext=createContext()
function CartContextProvider({ children }) {
    const [cartCount, setcartCount] = useState(0)
    
    const handleCartCount = (val) => {
        setcartCount(cartCount+val)
    }
    return (
      <CartContext.Provider value={{cartCount,handleCartCount}}>
            {children}
      </CartContext.Provider>
   
  )
}

export default CartContextProvider