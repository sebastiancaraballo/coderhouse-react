import logo from './logo.svg';
import './App.css';
import img from "./images/time.jpeg"
import NavBar from './components/NavBar';

function App() {
  const styles = { marginTop: "20px", color: "blue" }
  styles.color = "green"
  return (
    <div>
      <NavBar/>
      <h1 className='title'>Hola Coderhouse</h1>
      <br></br>
      <p style={ styles }>Lorem ipsum</p>
      <img width="200px" src={ img }></img>
      <br></br>
      <button onClick={ () => alert('hola')}>Click me</button>
    </div>
  );
}

export default App;
