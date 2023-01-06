// import{useState} from 'react';
import React from 'react'
import LoginRegistration from './LoginRegistration'

function HomePage(){

return(
    <div>
        <h1>Do we wanna put our name here? What is our name?</h1>
        <LoginRegistration login={LoginRegistration} />
    </div>
)
}
export default HomePage;