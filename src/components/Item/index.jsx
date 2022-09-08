import { Link, useParams } from "react-router-dom"

const Item = ({price, name, urlImage}) => {
    const params = useParams();

    return (
        <div className='item'>
            <Link to={"/detail/"+params.id}>
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