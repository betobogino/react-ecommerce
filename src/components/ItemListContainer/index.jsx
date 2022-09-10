import './ItemListContainer.css'
import ItemList from '../ItemList/'
import productsJS from '../../assets/utils/products'
import { useState, useEffect } from 'react'
import { PropagateLoader } from "react-spinners";

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsJS)
        }, 2000)
    })
}

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts()
            .then(data => {
                setProducts(data)
                setLoading(!loading)
            })    
    }, []);

    return (
        <div className="itemListContainer">
            {
            loading 
                ? <PropagateLoader color="#fff159" className="propagateLoader"/>
                : <ItemList products={products}/>
            }
        </div>
    );
}

export default ItemListContainer;