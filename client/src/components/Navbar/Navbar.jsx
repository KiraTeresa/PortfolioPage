import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import Home from "../../assets/images/KiraTeresaSoba.png"


function Navbar() {
  return (
    <nav className="dark">
      <div className="zenDots home-link">
        <Link to="/">
          <img src={Home} alt="KiraTeresaSoba" />
        </Link>
      </div>

      <div className="navigation">
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>

        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
          Projects
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;