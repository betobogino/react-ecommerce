import { Counter } from "../Counter/Counter";
import { useState } from "react";


const ItemDetail = ({title, price, stock, imageUrl, details}) => {
  //const [amountOnCart, setAmountOnCart] = useState(0);

  // const onAddCart = (amount) => {
  //   console.log(`Agregar al cart ${amount} unidades`);
  //   setAmountOnCart(amount);

  //   if(amountOnCart === stock){
  //     console.log("Stock limite, desaparecer")
  //   }
  // }

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
        <p>Stock disponible: {stock}</p>
        {/* <Counter stock={stock} initial={1} onAdd={onAddCart}></Counter>  */}
        <Counter stock={stock} initial={1}></Counter> 
      </div>         
    </div>
  )
}

export default ItemDetail;