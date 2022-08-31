import './ItemListContainer.css'
import ItemList from '../ItemList/'
import productsJS from '../../assets/utils/products'
import { useState, useEffect } from 'react'

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productsJS)
        }, 2000)
    })
}

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then(data => setProducts(data))    
    }, []);

    return (
        <div className="itemListContainer">
            <ItemList products={products}/>
        </div>
    );
}

export default ItemListContainer;