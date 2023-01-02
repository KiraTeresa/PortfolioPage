import { Link } from "react-router-dom";
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
        <Link to="/about">
          About
        </Link>

        <Link to="/projects">
          Projects
        </Link>

        <Link to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;