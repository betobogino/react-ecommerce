import { useState } from "react";

export const Counter = ( {stock, initial, onAdd} ) => {
  const [count, setCount] = useState(initial);

  return (
    <div className="itemBtn">
      <div>
        <button 
          className="text-primary" 
          disabled={count !== stock ? false : true} 
          onClick={() => count < stock && setCount(count + 1)}
        > 
          + 
        </button>
        <span>{count}</span>
        <button 
          className="text-primary" 
          disabled={count !== 1 ? false : true}
          onClick={() => count > 1 && setCount(count - 1)}
        > 
          - 
        </button>
      </div>
      <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
} 
