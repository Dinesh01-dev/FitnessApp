import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Fitness from './pages/Fitness'


function App() {
  return (
    <>
     <BrowserRouter>
            <Routes>

              <Route path='/' element={<Home />} ></Route>
              <Route path='/signup' element={<Signup />} ></Route>
              <Route path='/login' element={<Login />} ></Route>
              <Route path='/fitness' element={<Fitness />} ></Route>
            </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
