// import{useState} from 'react';
import React, {useState} from 'react'
import LoginRegistration from './LoginRegistration'

function HomePage(props){

return(
    <div>
        <LoginRegistration login={props}/>
    </div>
)
}

// const [username, setUsername]=useState("")
// const [password, setPassword]=useState("")


// function Login(){
//     const handleOnChangeUsername=(synthEvent)=>{

//   setUsername(synthEvent.target.value)
// }
//     const handleOnChangePassword=(synthEvent)=>{

//   setPassword(synthEvent.target.value)
// }

// const handleLoginSubmit=(synthEvent)=>{
//   synthEvent.preventDefault()
// }

// <div>
// <h2>Wanna login?</h2>

//     <form onSubmit={handleLoginSubmit} >

//       <input onChange={handleOnChangeUsername}/>
    
//       <input onChange={(handleOnChangePassword)=>{}}type="password"/>

//     <input type="submit"/>


//     </form>
//     </div>

export default HomePage;