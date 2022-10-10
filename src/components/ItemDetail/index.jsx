import { Counter } from "../Counter/Counter";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const ItemDetail = ({id, title, price, stock, imageUrl, details}) => {
  const [amountOnCart, setAmountOnCart] = useState(0);
  
  const { addItem } = useContext(CartContext);

  const onAddCart = (amount) => {
    setAmountOnCart(amount);

    const item = {
      id, 
      title, 
      price,
      quantity: amount,
      img: imageUrl
    }
    
    addItem(item);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se agrego exitosamente el producto al carrito',
      showConfirmButton: false,
      timer: 1500
    })
  }

  return (
    <div className="itemDetail">
      <div className="itemDetailImg">
        <div>
          <img src={"../"+imageUrl?.main} alt={title} />  
        </div>
      </div>
      <div className="itemDetailInfo">
        <div>
          <div>
            <span>Nuevo | 7011 vendido</span>
          </div>
          <div>
            <h4>{title}</h4>
          </div>
        </div>
        <div>
          <div>
            <span>${price}</span> 
          </div>
        </div>
        <ul>
          {details?.map((detail, index) => { 
            return <li key={index}>{detail}</li>    
          })}
        </ul>
      </div>
      <div className="itemDetailBtn">
        {
          amountOnCart === 0 
            ? <div>
                {
                  <div>
                    <h6>Stock disponible</h6>
                    <span>( {stock - amountOnCart} disponibles )</span>
                  </div>  
                }
                <Counter stock={stock} initial={1} onAdd={onAddCart}></Counter>        
              </div> 
            : <div>
                {
                  amountOnCart === 1
                    ? <p>Se agregó al cart {amountOnCart} unidad.</p>
                    : <p>Se agregaron al cart {amountOnCart} unidades.</p>
                }
                <Link to="/cart/"><button className="btn btn-success w-100">Ir al carrito</button></Link>
                <Link to="/"><button className="btn btn-primary w-100 mt-2">Seguir comprando</button></Link>
              </div>   
        }
      </div>         
    </div>
  )
}

export default ItemDetail;