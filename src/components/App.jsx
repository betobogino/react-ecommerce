import './App.css';
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
          </Routes>
        </BrowserRouter>
      </main>
    </> 
  );
}

export default App;