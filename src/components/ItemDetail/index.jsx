import { Counter } from "../Counter/Counter";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, title, price, stock, imageUrl, details}) => {
  const [amountOnCart, setAmountOnCart] = useState(0);

  const { cartItems, addItem } = useContext(CartContext);
  
  console.log(cartItems)
  
  const onAddCart = (amount) => {
    console.log(`Agregar al cart ${amount} unidades desde itemDetail`);
    setAmountOnCart(amount);

    const item = {
      id: id, 
      name: title, 
      price: price,
      quantity: amount
    }

    addItem(item);

    if(amountOnCart === stock){
      console.log("Stock limite, desaparecer")
    }
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
            <span className="">${price}</span> 
          </div>
        </div>
        <ul>
          {details?.map((detail, index) => { 
            return <li key={index}>{detail}</li>    
          })}
        </ul>
      </div>
      <div className="itemDetailBtn">
        <p>Stock disponible: {stock - amountOnCart}</p>

        <Counter stock={stock} initial={1} onAdd={onAddCart}></Counter>
        <hr/>
        {
          amountOnCart > 0 && <span>Agregados al carrito: {amountOnCart}</span>
        }
        <Link to="/cart/"><button className="btn btn-primary mt-2">Ir al carrito</button></Link>
        
        {/* <Counter stock={stock} initial={1}></Counter>  */}
      </div>         
    </div>
  )
}

export default ItemDetail;