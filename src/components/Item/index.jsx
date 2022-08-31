import { Counter } from "../Counter/Counter";

const onAddCart = (amount) => {
    console.log(`Agregar al cart ${amount} unidades`)
}

const Item = ({price, name, urlImage}) => {
    return (
        <div className='item'>
            <div className="itemImage">
                <img src={urlImage} alt="" />
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

export default Item;