import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/";
import productsJS from "../../assets/utils/products.js";
import "./index.css"

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getProductDetail()
      .then((productDetail) => {
        setDetails(productDetail)
      })
  }, []);

  const getProductDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsJS.find((product) => product.id === 9))
      }, 2000)
    })
  }
  
  return (
    <div className="itemDetailContainer">
      <ItemDetail info={details}/>
      {/* <ItemDetail title={details.title} price={details.price} brand={details.brand} model={details.model} stock={details.stock}/> */}
    </div>
  );
}

export default ItemDetailContainer;