import { Link, useParams } from "react-router-dom"

const Item = ({id, price, name, urlImage}) => {
    
    return (
        <div className='item'>
            <Link to={"/detail/"+id}>
                <div className="itemImage">
                    <img src={urlImage.main} alt="" />
                </div>
            </Link>
            <div className="itemInfo">
                <span>${price}</span>
                <span>Envío gratis</span>
                <span>{name}</span>
            </div>
        </div>
    ); 
}

export default Item;