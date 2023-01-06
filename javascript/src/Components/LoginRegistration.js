import{useState} from 'react';

const userLoginUrl='/login'

function LoginRegistration(){

    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")

    const handleOnChangeUsername=(synthEvent)=>{

  setUsername(synthEvent.target.value)
}
    const handleOnChangePassword=(synthEvent)=>{

  setPassword(synthEvent.target.value)
}

const [userToLogin, updateUserToLoginInfo]=useState(
    {
        username:'',
        password:''
    }
)
console.log("State of userToLogin: ", userToLogin)



const handleUserLoginOnChange=(synthEvent)=>{

updateUserToLoginInfo({...userToLogin, [synthEvent.target.name]: synthEvent.target.value})
}

const handleLoginSubmit=(synthEvent)=>{
  synthEvent.preventDefault()


  fetch(userLoginUrl,
  {
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(userToLogin)
  }
  )
  .then(r=>r.json())
  .then(console.log)
}

return(
<div>
<h2>Wanna login?</h2>

    <form onSubmit={handleLoginSubmit} >

      <input onChange={handleUserLoginOnChange}
      name='username'
      />
    
      <input type='password'
      onChange={handleUserLoginOnChange}name='password'
      />

    <input type="submit"/>


    </form>
    </div>
)}
    export default LoginRegistration;