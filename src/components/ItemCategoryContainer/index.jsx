import { useState, useEffect } from "react";
import ItemCategoryList from "../ItemCategoryList/"
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { getProductsCategory } from "../../services/firebaseCRUD";

const ItemCategoryContainer = () => {
  const [productsCategory, setProductsCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  
  const toggleLoading = () => {
    if(loading === false){
      setLoading(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    getProductsCategory(Number(id))
    .then((products) => { setProductsCategory(products) })
    .then(() => { if(loading) setLoading(!loading)})

    return () => {
      toggleLoading();
    }
  }, [id]);
  
  return (
    <div className="itemList">
      {
        loading 
          ? <PropagateLoader color="#fff159" className="loader"/>
          : <ItemCategoryList products={productsCategory}/>
      }
    </div>
  )
}

export default ItemCategoryContainer