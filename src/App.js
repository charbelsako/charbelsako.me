import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';

console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    </Provider>
  );
}

export default App;
