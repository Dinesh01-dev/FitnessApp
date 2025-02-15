import { NavLink,useNavigate } from 'react-router-dom'
import style from '../styles/Login.module.css'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'



function Login() {

  const[Email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  const navigate=useNavigate()

  const onSignup=()=>{
      if(Email<16 || password<8){
          alert('Make sure that your entering a genuine email and password consists  of 8 digits/letters')
          setEmail('')
          setPassword('')
      }
      else{
          signInWithEmailAndPassword(auth,Email,password)
          .then((userCredential)=>{
            
              navigate('/fitness')
              const user=userCredential.user;
          })
          .catch((error)=>{
            const errorcode=error.code;
            const errorMessage=error.message;
              alert('User Not Found')
              setEmail('')
              setPassword('')
          });
      }
  }
return (
  <>
    <div className={style.container}>
      <form>
          <h3>Login</h3>
          <br />
          <label>Email:</label>
          <input type='email'
           placeholder='Enter your Email'
           value={Email}
           onChange={(e)=>{setEmail(e.target.value)}}

           />

           <br />
           <br />

           <label>Password:</label>
           <input 
           type='password'
           placeholder='Enter your password'
           value={password}
           onChange={(e)=>{setPassword(e.target.value)}}
            />

            <br />
            <br />
            <Button onClick={onSignup} variant="contained">Login</Button>
            <br />
            <br />
            <NavLink to="/signup">Does not have an account?</NavLink>

      </form>

    </div>
  </>
)
}

export default Login
