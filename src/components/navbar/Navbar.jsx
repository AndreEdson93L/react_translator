import React from "react";
import { useUser } from "../../context/UserContext";
import { NavLink } from "react-router-dom";

// MODIFY

function Navbar() {
  const { user } = useUser();

  return (
    <nav>
      {user !== null && (
        <ul>
          <li>Translation History</li>
          <li>
            <NavLink to="/translations">Translations</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
