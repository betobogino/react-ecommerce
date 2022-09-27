import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const isInCart = (id) => {
      return cartItems.find(item => item.id === Number(id))
  }
  
  const addItem = ({id, title, price, quantity, img}) => {  
    const isExist = isInCart(id);

    if(isExist){
      cartItems.map((item) => {
        if(item.id === id){
          item.quantity += quantity;
        }
          
        return cartItems;
      });
      setCartItems(cartItems);
    }
    else{
      const newItem = {id: id, title: title, price: price, img: img, quantity: quantity};
      setCartItems([...cartItems, newItem]);
    }
  }   
    
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([]);
  }  

  const cartTotal = () => {
    let total = 0
    cartItems.map(item => {
      total = total + item.price * item.quantity
    })
    return total
  }

  return (
    <>
      <CartContext.Provider value={{cartItems, addItem, removeItem, clearCart, isInCart, cartTotal}}>
          {children}
      </CartContext.Provider>
    </>
  );
}

export { CartContext, CartProvider };