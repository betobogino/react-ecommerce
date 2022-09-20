import Item from '../Item/'

const ItemCategoryList = ({products}) => {  

  return(
    <div className='itemList'>
      {
        products.docs.map(doc => {
          const idProduct = doc.id;
          const data = doc.data();
          
          return <Item key={idProduct} name={data.title} price={data.price} urlImage={data.imageUrl} id={doc.id}/>
        })
      }
    </div>
  );

}

export default ItemCategoryList