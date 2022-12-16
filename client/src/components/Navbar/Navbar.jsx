import { Link } from "react-router-dom";
import "./Navbar.scss";


function Navbar() {
  return (
    <nav className="dark">
      <div className="zenDots">
        <Link to="/">
          Kira Teresa Soba
        </Link>
      </div>

      <div>
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