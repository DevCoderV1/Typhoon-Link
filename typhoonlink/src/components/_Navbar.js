import { useState } from "react";
import { Link } from "react-router-dom";
import "./_navbar.css";
const Navbar = () => {
  const [isOpen, setOpen] = useState(true);

  const OpenNavBar = () => {
    if (!isOpen) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    setOpen(!isOpen);
  };
  return (
    <header>
      <div className="header_title">
        <h1>Typhoon Link</h1>
      </div>
      <ul className={isOpen ? "nav_bar" : "nav_bars"}>
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="/Client">Game Client</Link>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
        <li>
          <Link to="/Login">Sign In</Link>
        </li>
      </ul>
      <div onClick={OpenNavBar} className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Navbar;
