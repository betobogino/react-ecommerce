import './App.css';
import Cart from '../components/Cart/';
import Header from '../components/Header/Header';
import ItemListContainer from '../components/ItemListContainer/';
import ItemDetailContainer from '../components/ItemDetailContainer/';
import ItemCategoryContainer from '../components/ItemCategoryContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from '../context/CartContext';

function App() {
  return (
    <>
      <UserProvider value={false}>
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
      </UserProvider>
    </> 
  );
}

export default App;