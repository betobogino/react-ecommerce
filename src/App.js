import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/';
import ItemDetailContainer from './components/ItemDetailContainer/';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <ItemListContainer /> */}
        <ItemDetailContainer />
      </main>
    </> 
  );
}

export default App;