import './App.css';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <>
      <Header />
      <main>
        <ItemListContainer />
      </main>
    </> 
  );
}

export default App;