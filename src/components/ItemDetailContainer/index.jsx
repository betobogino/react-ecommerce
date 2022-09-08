import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/";
import productsJS from "../../assets/utils/products.js";
import "./index.css"

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([{}]);
  const {id} = useParams();
  console.log("PARAMS: ",id)
  useEffect(() => {
    getProductDetail()
      .then((productDetail) => {
        setDetails(productDetail)
      })
      .catch((err) => console.error(err))
  }, []);
  
  const getProductDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        //resolve(productsJS.find((product) => product.id === idProduct))
        resolve(productsJS.find((product) => product.id === Number(id)))
      }, 1000)
    })
  }
  
  return (
    <div className="itemDetailContainer">
      <h1>{id}</h1>
      <ItemDetail info={details}/>
    </div>
  );
}

export default ItemDetailContainer;