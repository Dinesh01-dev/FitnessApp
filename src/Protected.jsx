import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from './firebase';
import { Navigate } from 'react-router-dom';

const Protected = ({child}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)

  useEffect(()=>{
    const removed=onAuthStateChanged(auth,(currentuser)=>{
        setUser(currentuser)
        setLoading(false)
    })
    return ()=>removed();
  },)
  if(loading){
    <p>Loading please wait.....</p>
  }
  else{
    return user?child :<Navigate to='/login'></Navigate>
  }
}

export default Protected
