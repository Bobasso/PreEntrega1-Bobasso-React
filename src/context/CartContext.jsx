import { createContext, useState, useEffect } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) =>{
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addProductInCart = (newProduct) => {
    const productIndex = cart.findIndex(product => product.id === newProduct.id);
    if (productIndex === -1) {
      setCart([ ...cart, newProduct ]);
    } else {
      const updatedCart = [...cart];
      updatedCart[productIndex].quantity += newProduct.quantity;
      setCart(updatedCart);
    }
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