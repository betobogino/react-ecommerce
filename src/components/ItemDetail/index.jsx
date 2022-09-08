import { Counter } from "../Counter/Counter";

const onAddCart = (amount) => {
    console.log(`Agregar al cart ${amount} unidades`)
}

const ItemDetail = (info) => {
  const {id, title, description, brand, model, price, stock, imageUrl, details} = info.info
  
  return (
    <div className="itemDetail">
      <div className="itemDetailImg">
        <div>
          <img src={imageUrl?.main} alt={title} />  
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
          {details?.map(detail => { 
            return <li>{detail}</li>    
          })}
        </ul>
      </div>
      <div className="itemDetailBtn">
        <p>Stock disponible: {stock}</p>
        <Counter stock={stock} initial={1} onAdd={onAddCart}></Counter> 
      </div>         
    </div>
  )
}

export default ItemDetail;