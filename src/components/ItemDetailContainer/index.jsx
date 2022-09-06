import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/";
import productsJS from "../../assets/utils/products.js";
import "./index.css"

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getProductDetail()
      .then((productDetail) => {
        console.log(productDetail)
        setDetails(productDetail)
      })
  }, [details]);

  const getProductDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsJS.find((product) => product.id === 1))
      }, 2000)
    })
  }
  
  return (
    <div className="itemDetailContainer">
      <ItemDetail title={details.title} price={details.price} brand={details.brand} model={details.model} stock={details.stock}/>
    </div>
  );
}

export default ItemDetailContainer;