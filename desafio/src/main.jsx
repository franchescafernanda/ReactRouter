import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom' /*se utilizo para proporcionar la funcionalidad de enrutamiento*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* App está envuelto en browserrouter lo que proporciona la capacidad de enrutamiento */}
      <App />
    </BrowserRouter>
    
  </React.StrictMode>, /* es un modo de desarrollo que ayuda a identificar y corregir problemas en la aplicación. */
)
