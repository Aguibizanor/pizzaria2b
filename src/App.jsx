import {useState} from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Inicio from './' /*Colocar este caminho depois*/

const App = () => {

  const [color] = useState("#eb8d04")
  document.body.style.backgroundColor = color

  return (
    <div className = 'bg-white border' fluid>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App