import { Counter } from "../Counter/Counter";

const onAddCart = (amount) => {
    console.log(`Agregar al cart ${amount} unidades`)
}

const ItemDetail = ({title, price, brand, model, stock}) => {
  
  return (
    <>
      <p>title: {title}</p> 
      <p>price: {price}</p> 
      <p>brand: {brand}</p> 
      <p>model: {model}</p> 
      <p>stock: {stock}</p> 
      
      <Counter stock={5} initial={1} onAdd={onAddCart}></Counter>    
    </>
  )
}

export default ItemDetail;