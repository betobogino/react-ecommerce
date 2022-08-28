import { useState } from "react";

export const Counter = ( {stock, initial, onAdd} ) => {
    const [ count, setCount ] = useState(initial);
    return (
        <div className="itemBtn">
            <div>
                <button className="text-primary" onClick={() => count < stock ? setCount(count + 1) : console.log("Stock superado")}> + </button>
                <span>{count}</span>
                <button className="text-primary" onClick={() => count > 1 ? setCount(count - 1) : console.log("No puede seleccionar 0 unidades")}> - </button>
            </div>
            <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
} 
