import { NavLink } from "react-router-dom";
import { personalDetails } from "../data";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">{personalDetails.fullName}</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
         <NavLink to="/certificates">Cert</NavLink>
        <NavLink to="/contact">Contact</NavLink>
       
      </div>
    </nav>
  );
}

export default Navbar;