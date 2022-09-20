import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from '../ItemDetail/';

import "./index.css"
import { PropagateLoader } from 'react-spinners';
import { getProduct } from '../../services/firebaseCRUD';

const ItemDetailContainer = () => {
  const [details, setDetails] = useState([{}]);
  const [loading, setLoading] = useState(true);

  const {id} = useParams();
  
  useEffect(() => {
    getProduct(id)
    .then(details => {
      setDetails(details.data())
      setLoading(!loading)
    });
  }, []);
  
  return (
    <div className="itemDetailContainer">
      {loading 
        ? <PropagateLoader color="#fff159" className="propagateLoader"/> 
        : <ItemDetail id={details.id} title={details.title} price={details.price} stock={details.stock} imageUrl={details.imageUrl} details={details.details}/>
      }
    </div>
  );
}

export default ItemDetailContainer;