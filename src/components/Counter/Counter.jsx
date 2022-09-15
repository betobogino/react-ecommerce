import { useState } from "react";
import { Link } from "react-router-dom";

export const Counter = ( {stock, initial, onAdd} ) => {
  const [count, setCount] = useState(initial);
  const [showBtnBuy, setShowBtnBuy] = useState(false);

  const onBuy = () => {
    console.log("COMPRAR")
  }
    
  const onAddCart = (amount) => {
    console.log(`Agregar al cart ${amount} unidades`);
  }

  return (
    <div className="itemBtn">
      <div>
        <button className="text-primary" onClick={() => count < stock ? setCount(count + 1) : console.log("Stock superado")}> + </button>
        <span>{count}</span>
        <button className="text-primary" onClick={() => count > 1 ? setCount(count - 1) : console.log("No puede seleccionar 0 unidades")}> - </button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar</button>
      {/* {
        showBtnBuy 
          ? <Link to="/cart/"><button className="btn btn-primary mt-2" onClick={() => onBuy(count)}>Comprar</button></Link>
          : <button className="btn btn-primary" onClick={() => onAddCart(count)}>Agregar al carrito</button>
      } */}
    </div>
  );
} 
