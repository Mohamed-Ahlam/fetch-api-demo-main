import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  const [dogFacts, setDogFacts] = useState([]); 

  useEffect(() =>{
    fetch('https://dogapi.dog/api/facts?number=5')
    .then(response => response.json())
    .then(data => setDogFacts(data.facts))
    .catch(error => console.log(error));
    console.log(dogFacts);
  }, [])

  const handleRefresh = () => {
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Random Dog Facts</h1>
        <img src="./imgs/dog.jpg"></img>
        <ul className='list'>
          {dogFacts.map((fact, index) => (
            <li className="item" key={index}>
              {fact}
            </li>
          ))}
        </ul>
        <button className='button' onClick={handleRefresh}>Give me new facts!</button>
      </div>
    </div>
  );
}

export default App;
