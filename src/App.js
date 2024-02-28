import logo from './logo.svg';
import './App.css';

function App() {

  function rollDice() {
    return Math.ceil(Math.random() * 6);
  }

  const aDice = rollDice();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          salutations planet {aDice}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
