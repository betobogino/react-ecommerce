import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <main>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/detail/:id" element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
      </main>
    </> 
  );
}

export default App;