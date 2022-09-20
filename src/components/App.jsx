import './App.css';
import Cart from '../components/Cart/';
import Header from '../components/Header/Header';
import ItemListContainer from '../components/ItemListContainer/';
import ItemDetailContainer from '../components/ItemDetailContainer/';
import ItemCategoryContainer from '../components/ItemCategoryContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
/*
//Para insertar los productos en firebase lei el archivo js que ya tenia e itere para ejecutar la funcion que impletente en el archivo CRUD de firebase
import { addProducts } from '../services/firebaseCRUD';
import products from '../assets/utils/products';

products.forEach(product => {
  addProducts(product);  
});
*/
function App() {
  return (
    <>
      <CartProvider value={false}>
        <main>  
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer />}/>
              <Route path="/category/:id" element={<ItemCategoryContainer />}/>
              <Route path="/detail/:id" element={<ItemDetailContainer />}/>
              <Route path="/cart/" element={<Cart />}/>
            </Routes>
          </BrowserRouter>
        </main>
      </CartProvider>
    </> 
  );
}

export default App;