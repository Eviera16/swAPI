import React, {useState} from 'react';
import './App.css';
import Index from './components/index';
import { Router, navigate } from '@reach/router';
import axios from 'axios';
import Display from './components/display';



function App() {
  const [responseData, setResponseData] = useState([]);
  
  const handleSearch = (drop, input) => {
    console.log("this is drop", drop);
    navigate(`/${drop}/${input}/`);
    axios.get(`https://swapi.dev/api/${drop}/${input}/`)
    .then(response=>{
      console.log(response.data.results)
      setResponseData(response.data)})
    .catch(err=> console.log("These are not the droids you are looking for."));
  }
  
  return (
    <div className="App">
        <Index search={handleSearch}/>
        <Router>
          <Display
          path="/:type/:id/"
          data={responseData}
          />

        </Router>
        
    </div>
  );
}

export default App;
