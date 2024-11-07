import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) =>{
  const [cart, setCart] = useState([])
  
  const addProductInCart = () => {
    
  }

  return(
    <CartContext.Provider value={{ cart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }