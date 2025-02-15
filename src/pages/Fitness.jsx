import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from '../styles/Fitness.module.css'
 


const Fitness = () => {
    const[excercise,setexcercises]=useState([])

    const fetchX=async()=>{
        try{
            const response= await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=5',{
                method: 'GET',
                headers: {
                    'x-rapidapi-key': '6668fff10dmsh5b5fc175d80884dp1c6c06jsn926280daaef0',
                    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
                  }
            } )
                
           const dataE=await response.json()
           setexcercises(dataE)
           console.log(dataE)

        }
        catch(error){
           console.log(error)
        }

    }
    useEffect(()=>{
        fetchX()
    },[]);
  return (
   <>
     <div className={style.container}>
        <marquee>
          <h2> Fitness ||  Separation comes from preparation...    ||</h2>
        </marquee>
        <div className={style.header}>
            <h2>Push harder today if you want a different tomorrow.</h2>
            <img className={style.image} src="/images/gym.jpg" width="600" />
        </div>
        <h2>Workout split</h2>

         <div className={style.grid}>
            {excercise.length>0?(
                excercise.map((item,index)=>(
                    <div key={index} className={style.card}>
                        <img  src={item.gifUrl} alt="Excerise"/>
                        <h3>{item.name}</h3>
                        <p>Targeting:{item.target}</p>
                        <p>Equipment:{item.equipment}</p>
                        
                    </div>
                ))

            ):(
                <p>Loading Data</p>
            )}

         </div>
     </div>
   </>
  )
}

export default Fitness
