import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './Components/Add'
import View from './Components/View'
import Welcom from './Components/Welcom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      <Routes>
        
        <Route path='/w' element={<Welcom/>}/>
        <Route path='/A' element={<Add/>}/>
        <Route path='/V' element={<View/>}/>

      </Routes>

      
    </>
  )
}

export default App
