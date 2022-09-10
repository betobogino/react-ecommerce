import Item from '../Item/'

const ItemCategoryList = ({products}) => {  

  return(
    <div className='itemList'>
      {products.map((product) => {
        return <Item key={product.id} name={product.title} price={product.price} urlImage={product.imageUrl} id={product.id}/>
      })}
    </div>
  );

}

export default ItemCategoryList