import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import style from '../styles/Signup.module.css'
import Button from '@mui/material/Button'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase'


function Signup() {
   

    const[Email,setEmail]=useState()
    const[password,setPassword]=useState()

    const navigate=useNavigate()

    const onSignup=()=>{
        if(Email<16 || password<8){
            alert('Make sure that your entering a genuine email and password consists  of 8 digits/letters')
            setEmail('')
            setPassword('')
        }
        else{
            createUserWithEmailAndPassword(auth,Email,password)
            .then(()=>{
                alert('Account As been created')
                navigate('/login')
            })
            .catch((error)=>{
                alert('Invalid input or Account already existed')
                setEmail('')
                setPassword('')
            })
        }
    }
  return (
    <>
      <div className={style.container}>
        <form>
            <h3>SignUp</h3>
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
              <Button onClick={onSignup} variant="contained">signup</Button>
              <br />
              <br />
              <NavLink to="/login">Already have an account?</NavLink>

        </form>

      </div>
    </>
  )
}

export default Signup
