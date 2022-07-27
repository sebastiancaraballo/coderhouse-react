import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SecondaryHeader from './components/SecondaryHeader';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <header>
      <SecondaryHeader/>
      <Header/>
      <Navigation/>
      <ItemListContainer greeting="Work in Progress"/>
    </header>
  );
}

export default App;
