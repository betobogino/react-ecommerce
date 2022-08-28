import { Counter } from "../Counter/Counter";

const onAddCart = (amount) => {
    console.log(`Agregar al cart ${amount} unidades`)
}

export const Item = ({price, name}) => {
    return (
        <div className='item'>
            <div className="itemImage">
                <img src="assets/img/auriculares.jpg" alt="" />
            </div>
            <div className="itemInfo">
                <span>{price}</span>
                <span>Envío gratis</span>
                <span>{name}</span>
            </div>
            <Counter stock={5} initial={1} onAdd={onAddCart}></Counter>
        </div>
    ); 
}