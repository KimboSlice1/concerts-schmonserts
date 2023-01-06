// import{useState} from 'react';
import React from 'react'
import LoginRegistration from './LoginRegistration'

function HomePage(){

return(
    <div>
        <h1>Concert Schmonsters</h1>
        <LoginRegistration login={LoginRegistration} />
    </div>
)
}
export default HomePage;