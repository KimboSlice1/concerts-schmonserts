import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()
  

  const { username, email, password } = formData

  function onSubmit(e) {
    e.preventDefault()
    const user = {
      username,
      email,
      password
    }

    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(data => {
        if (data.errors) {
          setErrors(data.errors)
        } else {
          navigate('/', { replace: true })
        }
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Username</label>
        <input type='text' name='username' value={username} onChange={handleChange} />

        <label>Email</label>
        <input type='text' name='email' value={email} onChange={handleChange} />

        <label>Password</label>
        <input type='password' name='password' value={password} onChange={handleChange} />

        <input type='submit' value='Sign up!' />
      </form>
      {errors ? errors.map(e => <div>{e[0] + ': ' + e[1]}</div>) : null}
    </>
  )
}

export default SignUp
