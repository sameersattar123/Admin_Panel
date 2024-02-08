import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../store/auth";

const Navbar = () => {
  const { isLoggedUser } = useAuth();

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">Sameer</NavLink>
          </div>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            {isLoggedUser ? (
              <li>
                <NavLink to="/logout">Logout</NavLink>
              </li>
            ) : (
              <>
                <li> 
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
