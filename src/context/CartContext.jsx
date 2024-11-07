import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) =>{
  const [cart, setCart] = useState([])
  
  const addProductInCart = (newProduct) => {
    setCart( [ ...cart, newProduct ] )
  }

  const totalQuantity = () =>{
    const total = cart.reduce((acc, productCart) => acc + productCart.quantity, 0)
    return total
  }

  const totalPrice = () => {
    const price = cart.reduce((acc, productCart) => acc + (productCart.quantity * productCart.price), 0)
    return price
  }

  const deleteProductById = (idProduct) => {
    const filterProducts = cart.filter((productCart) => productCart.id !== idProduct)
    setCart(filterProducts)
  }

  const deleteCart = () =>{
    setCart([])
  }

  return(
    <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart }}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }