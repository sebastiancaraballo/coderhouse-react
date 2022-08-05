import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SecondaryHeader from './components/SecondaryHeader';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <body>
      <SecondaryHeader/>
      <Header/>
      <Navigation/>
      {/* <ItemListContainer/> */}
      <ItemDetailContainer/>
    </body>
    
  );
}

export default App;
