import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate()
  
  function handleLogout() {
    fetch('/sessions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
      
    })
    // navigate to the login page
    navigate('/', { replace: true })
  }

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout

