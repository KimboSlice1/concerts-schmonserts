import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react'

const concertsSchmonsertsURL="http://localhost:4000/"

function App() {
  fetch( concertsSchmonsertsURL )
  .then( r => r.json () )
  .then(console.log())



  return (

    
    <div className="App">
     <h1>This is the home page motherfuckers</h1>
    </div>
  );
}

export default App;
