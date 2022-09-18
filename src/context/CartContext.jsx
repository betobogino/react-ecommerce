import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const isInCart = (id) => {
        return cartItems.find(item => item.id === Number(id))
    }

    const addItem = ({id, name, price, quantity, img}) => {
        const isExist = isInCart(id);

        if(isExist){
            cartItems.map((item) => {
                if(item.id === id){
                    item.quantity = quantity;
                }
                
                return cartItems;
            });
            setCartItems(cartItems);
        }
        else{
            const newItem = {id: id, name: name, price: price, quantity: quantity, img: img};
            setCartItems([...cartItems, newItem]);
        }
    }   
    
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id))
    }

    const clearCart = () => {
        setCartItems([]);
    }  

    return (
        <>
            <CartContext.Provider value={{cartItems, addItem, removeItem, clearCart, isInCart}}>
                {children}
            </CartContext.Provider>
        </>
    );
}

export { CartContext, CartProvider };