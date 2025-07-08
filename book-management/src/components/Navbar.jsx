import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/" className="nav-link">Home</NavLink>
    <NavLink to="/books" className="nav-link">Browse Books</NavLink>
    <NavLink to="/add" className="nav-link">Add Book</NavLink>
  </nav>
)

export default Navbar 