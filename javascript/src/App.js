import logo from './logo.svg';
import './App.css';
import{useEffect, useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './NavBar'

const concertsSchmonsertsURL="http://localhost:4000/"

function App() {
  fetch( concertsSchmonsertsURL )
  .then( r => r.json () )
  .then(console.log())

const [username, setUsername]=useState("")
const [password, setPassword]=useState("")

const handleOnChangeUsername=(synthEvent)=>{

  setUsername(synthEvent.target.value)

}
const handleOnChangePassword=(synthEvent)=>{

  setPassword(synthEvent.target.value)

}

const handleLoginSubmit=(synthEvent)=>{
  synthEvent.preventDefault()
}
  return (
    
    
    <div className="App">
      <NavBar/>
      {/*
      <Routes>
        <Route path="/" element={ Home />} />
        <Route path="/artist" element={ Artist />} />
        {/* I don't think I remember the name of the route */}
        {/* you were almost there just switch is no longer used and is replaced with Routes and 
        you dont need browser router that is only in the index.js file and instead of componets its elements
        i fixed the above syntax -Caleb */}
      {/* <Routes>
       */}
     <h1>This is the home page motherfuckers</h1>

    <h2>Wanna login?</h2>

    <form onSubmit={handleLoginSubmit} >

      <input onChange={handleOnChangeUsername}/>
    
      <input onChange={(handleOnChangePassword)=>{}}type="password"/>

    <input type="submit"/>


    </form>
    </div>
  );
}

export default App;
