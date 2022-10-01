import './ItemListContainer.css';
import ItemList from '../ItemList/';
import { useState, useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';

import { getProducts } from '../../services/firebaseCRUD';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const colProducts = getProducts();
    const productsState = [];

    colProducts.then(products => {
      products.forEach(product => {
        const productAux = {
          id: product.id,
          data: product.data()
        }
        
        productsState.push(productAux)
      })
      
      setProducts(productsState);
      setLoading(!loading)
    })
  }, []);

  return (
    <div className="itemListContainer">
      {
      loading 
        ? <PropagateLoader color="#fff159" className="loader"/>
        : <ItemList products={products}/>
      }
    </div>
  );
}

export default ItemListContainer;