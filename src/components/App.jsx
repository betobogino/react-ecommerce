import './App.css';
import Cart from '../components/Cart/';
import Header from '../components/Header/Header';
import ItemListContainer from '../components/ItemListContainer/';
import ItemDetailContainer from '../components/ItemDetailContainer/';
import ItemCategoryContainer from '../components/ItemCategoryContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
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
    </> 
  );
}

export default App;