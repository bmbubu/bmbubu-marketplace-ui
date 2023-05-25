import { NavLink } from "react-router-dom";

export const AppNavbar = () => {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        <li>
          <a className="nav-link scrollto active" href="#hero">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#services">
            Expert Services
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#portfolio">
            Sellers
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#team">
            Buyers
          </a>
        </li>
        <li>
          <a href="blog.html">Blog</a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className="nav-link scrollto" href="#contact">
            Affliate Signup
          </a>
        </li>
        <li>
          <NavLink className="getstarted scrollto" to={"/login"}>
            Dashboard
          </NavLink>
        </li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>
  );
};
