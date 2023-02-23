import React from "react";
import { useUser } from "../../context/UserContext";
import { NavLink } from "react-router-dom";
import ProfileLogout from "../Profile/ProfileLogout";
import "./Navbar.css"

function Navbar() {
  const { user } = useUser();

  return (
    <nav className="navbar">
      {user !== null && (
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/translations" className="navbar__link">
              Translations
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/profile" className="navbar__link">
              Profile
            </NavLink>
          </li>
          <li className="navbar__item">
            <ProfileLogout className="navbar__logout"/>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
