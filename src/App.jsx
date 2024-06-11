import {useState} from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Inicio from './pages/Inicio'

const App = () => {

  const [color] = useState("#836FFF")
  document.body.style.backgroundColor = color

  return (
    <div className = 'bg-white border' fluid>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/inicio" element={<Inicio/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App