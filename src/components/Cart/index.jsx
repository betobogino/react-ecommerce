import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './index.css'

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  return (
    <>
      <ul>
        {
          cartItems.map(item => {
            return <li key={item.id}>{`${item.id} - ${item.name} - $${item.price} - ${item.quantity}`}</li>
          })
        }
      </ul>
      <button className='btn btn-danger' onClick={() => clearCart()}>Vaciar carrito</button>
    </>
  );
}

export default Cart;