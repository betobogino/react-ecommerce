import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { IconWidgetDelete } from '../IconWidget/IconWidgetDelete';

import './index.css'

const Cart = () => {
  const { cartItems, clearCart, removeItem, cartTotal } = useContext(CartContext);

  return (
    <div className='cartContainer'>
      <div className='cart'>
        <div className='cartItemsContainer'>
        {
          Object.keys(cartItems).length >= 1
            ? 
            cartItems.map(item => {
              return (
                  <div key={item.id} className="cartItem">
                    <div>
                      <img src={"../"+item.img.main} alt=""></img>
                    </div>
                    <div>
                      <p>{item.title}</p>
                    </div>
                    <div>
                      <p>{item.quantity}</p>
                    </div>
                    <div>
                      <h6>${item.price.toFixed(2)}</h6>
                    </div>
                    <div onClick={() => removeItem(item.id)}>
                      <IconWidgetDelete />
                    </div>
                  </div>
              )  
            })
          : 
          <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
            <h2>Aún no hay productos en tu carrito</h2>
            <Link to="/"><button className='btn btn-success'>Ir a comprar</button></Link>
          </div>
        }
        </div>
        {
          Object.keys(cartItems).length >= 1
            &&
              <div className='cartTotal'>
                <button className='btn btn-danger ms-2 btnDeleteCart' onClick={() => clearCart()}>Vaciar carrito</button>
                <Link to="/checkout">
                  <button className='btn btn-primary me-2'>Continuar compra</button>
                </Link>
                <h5>Total ${cartTotal().toFixed(2)}</h5>
              </div>  
        }
      </div>
    </div>
  );
}

export default Cart;