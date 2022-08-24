
export const Item = ({price, name}) => {
    return (
        <div className='item'>
            <div>
                <img src="assets/img/auriculares.jpg" alt="" />
            </div>
            <div>
                <span>{price}</span>
                <span>Envío gratis</span>
                <span>{name}</span>
            </div>
        </div>
    ); 
}