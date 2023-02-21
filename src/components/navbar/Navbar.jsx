import React from "react";
import { useUser } from "../../context/UserContext";
import { NavLink } from 'react-router-dom';

function Navbar() {
  const { user } = useUser();

  return (
    <nav>
      {user !== null && (
        <ul>
          <li>Coffee Orders</li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
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
