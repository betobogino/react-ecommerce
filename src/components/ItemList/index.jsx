import Item from '../Item/'

const ItemList = ({products}) => {
  return (
    <div className='itemList'>    
    {
      products.map(product => {
        const idProduct = product.id;
        const data = product.data;
        
        return <Item key={idProduct} name={data.title} price={data.price} urlImage={data.imageUrl} id={idProduct}/>
      })
    }  
    </div>
  );
}

export default ItemList;