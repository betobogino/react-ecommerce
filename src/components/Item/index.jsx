const Item = ({price, name, urlImage}) => {

    return (
        <div className='item'>
            <div className="itemImage">
                <img src={urlImage.main} alt="" />
            </div>
            <div className="itemInfo">
                <span>${price}</span>
                <span>Envío gratis</span>
                <span>{name}</span>
            </div>
        </div>
    ); 
}

export default Item;