import{useState} from 'react';

function loginRegistration(props){

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

const handleUserLoginOnChange=(synthEvent)=>{

    updateUserToLoginInfo({...userToLogin, [synthEvent.target.name]: synthEvent.target.value})

}




const handleLoginSubmit=(synthEvent)=>{
  synthEvent.preventDefault()
}







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
}
    export default loginRegistration;