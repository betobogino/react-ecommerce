import { useState } from "react";
import { Link } from "react-router-dom";

export const Counter = ( {stock, initial, onAdd} ) => {
    const [count, setCount] = useState(initial);
    const [showBtnBuy, setShowBtnBuy] = useState(false);
    const [amountOnCart, setAmountOnCart] = useState(1);

    const onBuy = () => {
        console.log("COMPRAR")
    }
    
  const onAddCart = (amount) => {
    console.log(`Agregar al cart ${amount} unidades`);
    setAmountOnCart(amount);
    setShowBtnBuy(true);
    // if(amountOnCart === stock){
    //   console.log("Stock limite, desaparecer")
    // }
  }

    return (
        <div className="itemBtn">
            <div>
                <button className="text-primary" onClick={() => count < stock ? setCount(count + 1) : console.log("Stock superado")}> + </button>
                <span>{count}</span>
                <button className="text-primary" onClick={() => count > 1 ? setCount(count - 1) : console.log("No puede seleccionar 0 unidades")}> - </button>
            </div>
            {
                showBtnBuy 
                    ? <Link to="/cart/"><button className="btn btn-primary mt-2" onClick={() => onBuy(count)}>Comprar</button></Link>
                    : <button className="btn btn-primary" onClick={() => onAddCart(count)}>Agregar al carrito</button>
            }
        </div>
    );
} 
