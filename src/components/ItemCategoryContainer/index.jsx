import { useState, useEffect } from "react";
import ItemCategoryList from "../ItemCategoryList/"
import { useParams } from "react-router-dom";
import productsJS from "../../assets/utils/products";
import { PropagateLoader } from "react-spinners";

const ItemCategoryContainer = () => {
  const [productsCategory, setProductsCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  
  useEffect(() => {
    getProductsCategory()
    .then((products) => {
      setProductsCategory(products)
      if(loading){
        setLoading(!loading)
      }
    })
  }, [id]);

  const getProductsCategory = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsJS.filter((product) => product.category === Number(id)))
      }, 2000)
    })     
  }
  
  return (
    <div className="itemList">
      {
        loading 
          ? <PropagateLoader color="#fff159" className="propagateLoader"/>
          : <ItemCategoryList products={productsCategory}/>
      }
    </div>
  )
}

export default ItemCategoryContainer