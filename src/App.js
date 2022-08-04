import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SecondaryHeader from './components/SecondaryHeader';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <body>
      <SecondaryHeader/>
      <Header/>
      <Navigation/>
      <ItemListContainer/>
    </body>
    
  );
}

export default App;
