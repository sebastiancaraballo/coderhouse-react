import './App.css';
import Header from './components/Header';
import NavigationContainer from './components/NavigationContainer';
import ShoppingCart from './components/ShoppingCart';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {CartContextProvider} from './store/cartContext';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ShoppingCart/>
        <Header/>
        <NavigationContainer/>
        <Routes>
          <Route path="categories/:categoryName" element={<ItemListContainer/>}></Route>
          <Route path="item/:itemId" element={<ItemDetailContainer/>}></Route>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
        <Footer/>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
