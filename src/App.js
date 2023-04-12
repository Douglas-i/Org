import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/Header';
// console.log(Header);

function App() {
  return (
    <div className="App">      
      <Header></Header>      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Mundo con React | Douglas Hernandez
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amonooooos!!!!
        </a>
      </header>
    </div>
  );
}

export default App;
