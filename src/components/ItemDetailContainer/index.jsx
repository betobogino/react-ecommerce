import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/";
import productsJS from "../../assets/utils/products.js";
import "./index.css"

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([]);
  const idProduct = useParams();

  useEffect(() => {
    getProductDetail()
      .then((productDetail) => {
        setDetails(productDetail)
      })
  }, []);

  const getProductDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsJS.find((product) => product.id === idProduct))
      }, 2000)
    })
  }
  
  return (
    <div className="itemDetailContainer">
      <ItemDetail info={details}/>
    </div>
  );
}

export default ItemDetailContainer;