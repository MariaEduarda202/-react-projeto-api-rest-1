import logo from './logo.svg';
import './App.css';
import Nomes from './componentes/Nomes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      <Nomes/>
        </p>
        
      </header>
    </div>
  );
}

export default App;
