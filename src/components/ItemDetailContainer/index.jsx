import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/";
import productsJS from "../../assets/utils/products.js";
import "./index.css"
import { PropagateLoader } from "react-spinners";

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  
  useEffect(() => {
    getProductDetail()
      .then((productDetail) => {
        setDetails(productDetail)
        setLoading(!loading)
      })
      .catch((err) => console.error(err))
  }, []);
  
  const getProductDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        //resolve(productsJS.find((product) => product.id === idProduct))
        resolve(productsJS.find((product) => product.id === Number(id)))
      }, 2000)
    })
  }
  
  return (
    <div className="itemDetailContainer">
      {loading 
        ? <PropagateLoader color="#fff159" className="propagateLoader"/> 
        : <ItemDetail title={details.title} price={details.price} stock={details.stock} imageUrl={details.imageUrl} details={details.details}/>
      }
    </div>
  );
}

export default ItemDetailContainer;