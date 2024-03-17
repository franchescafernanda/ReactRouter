
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
        <Routes> {/* contiene las rutas */}
          <Route path="/" element={<Home/>}/> {/* especifica que cuando la URL sea "/", se renderizará el componente Home */}
          <Route path="/contact" element={<Contact/>}/> {/* especifica que cuando la URL sea "/contact" se renderizará el componente contacto */}
        </Routes>
      </div>
    </>
  )
}

export default App
