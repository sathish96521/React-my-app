import './App.css';

function App() {
  function handleClick() {
    alert('You clicked me!');
  }
  return (
    
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      <button onClick={handleClick} className="avatar">
      I'm a button
    </button>
      </header>
    </div>
  
  );
}

export default App;
