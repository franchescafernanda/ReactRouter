
import { Link } from 'react-router-dom'  /* se utiliza para crear enlaces en la aplicación de React */

const NavLink = ({ children, to }) => {
  return (
    <Link to={to}> {/* link se usa para crear un enlace de navegación */}
      <span className="nav-link" style={{ color: 'inherit' }}>{children}</span>
    </Link>
  )
}

const NavBar = () => {
    return (
        <header className="navbar">
          <div className="container">
            <nav>
              <i className="fa-solid fa-house"></i>
              <NavLink to="/">
                <span className='inicio'>Home</span>
              </NavLink>
              <i className="fa-solid fa-address-book"></i>
              <NavLink to="/contact">
                <span className='contacto'>Contacto</span>
              </NavLink>
            </nav>
            <h1>Happy Cake🍰</h1>
          </div>
        </header>
    )
}

export default NavBar