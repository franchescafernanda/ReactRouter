
import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import Contact from './views/Contacto'

function App() {

  return (
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
