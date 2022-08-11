import './App.css';
import Header from './components/Header';
import NavigationContainer from './components/NavigationContainer';
import SecondaryHeader from './components/SecondaryHeader';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <SecondaryHeader/>
      <Header/>
      <NavigationContainer/>
      <Routes>
        <Route path="categories/:categoryName" element={<ItemListContainer/>}></Route>
        <Route path="item/:itemId" element={<ItemDetailContainer/>}></Route>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
