import React, { useState } from 'react'
import style from '../styles/Home.module.css'
import Button from '@mui/material/Button'
import {useNavigate} from 'react-router-dom'

function Home() {

    const[feet,setfeet]=useState(5)
    const[inches,setinches]=useState(5)
    const[weight,setweight]=useState(50)
    const[bmi,setbmi]=useState('13.015410245730944')
    
    const[bmiResult,setbmiResult]=useState('underweight')
    const navigate=useNavigate()

    const gotonext=()=>{
     navigate("/signup")
    }

    const calulate=()=>{
        let f=parseInt(feet)
        let inch=parseInt(inches)
        let h=(f*12+inch)*0.0245
        let w=parseInt(weight)
        let result=w/(h*h)
        setbmi(result)

        if(result<18.9){
          setbmiResult("UnderWeight =>Go to Gym")
        }
        else if(result>=18.9 && result<=24.9){
          setbmiResult("Normal =>Good diet")
        }
        else{
            setbmiResult("Over Weight =>go to gym and take a diet")
        }
       
    }
  return (
    <>
    <div className={style.container}>
       
       <div className={style.bmi}>

        <h2 className={style.text}>BMI Calculator</h2>

           <div className={style.first_bmi}>
            <h2 className={style.text}>Height {feet} ft</h2>
            <input 
            id={style.input}
            type="range"
            max='7'
            min='2'
            value={feet}
            onChange={(e)=>{
              setfeet(e.target.value)
             
            }}
            />
           
           <h2 className={style.text}>Height {inches} inches</h2>
            <input 
            id={style.input}
            type="range"
            min='0'
            max='11'
            
            value={inches}
            onChange={(e)=>{
              setinches(e.target.value)
             
            }}
            />

          <h2 className={style.text}>Weight {weight} kgs</h2>
            <input 
            id={style.input}
            type="range"
            min='0'
            max='130'
            step='0.1'
            value={weight}
            onChange={(e)=>{
              setweight(e.target.value)
              
            }}
            />
                <Button onClick={calulate} variant="contained">Calculate</Button>
     </div>
     <h1>BMI: {bmi}</h1>
     <p>{bmiResult}</p>
       </div>
       

       <div className={style.second_bmi}>
          <h1 className={style.next}>Continue to Application</h1>
          <Button onClick={gotonext} variant="contained">Continue</Button>
           
        </div>
       

      </div>
    </>
  )
}

export default Home
