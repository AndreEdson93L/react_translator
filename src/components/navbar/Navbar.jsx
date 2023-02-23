import React from "react";
import { useUser } from "../../context/UserContext";
import { NavLink } from "react-router-dom";
import ProfileLogout from "../Profile/ProfileLogout";

// MODIFY

function Navbar() {
  const { user } = useUser();

  return (
    <nav>
      {user !== null && (
        <ul>
          <li>
            <NavLink to="/translations">Translations</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <ProfileLogout/>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
