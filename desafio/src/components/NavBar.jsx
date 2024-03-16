
import { Link } from 'react-router-dom'

const NavLink = ({ children, to }) => {
  return (
    <Link to={to}>
      <span className="nav-link" style={{ color: 'none' }}>{children}</span>
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