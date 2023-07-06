import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const API_URI = process.env.API_URI || 'http://localhost:3000';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(API_URI + '/user/get')
      .then(response => response.json())
      .then(data => {
        setData(data); // Set the fetched data in the state
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {data.length > 0 &&
            data.forEach(item => {
              return <li key={item.id}>{item.name}</li>;
            })}
        </ul>
      </header>
    </div>
  );
}

export default App;