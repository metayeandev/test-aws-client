import {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [test, setTest] = useState([])

  useEffect(()=> {

    var config = {
      method: 'get',
      url: 'https://cnxelection.com/test',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data)
      setTest(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {test.message}
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
