//#region Navbar.jsx

/*
This is a React component that renders a navigation bar for the application.
It uses the useUser hook from a custom UserContext to check if the user 
is logged in and then displays links to "Translations" and "Profile" pages, 
along with a profile image for the user. If the user is not logged in, 
the navigation bar is not displayed at all.
*/

//#endregion

import React from "react";
import { useUser } from "../../context/UserContext";
import { NavLink } from "react-router-dom";
import ProfileImage from "../Profile/ProfilaImage/ProfileImage";
import "./Navbar.css";

function Navbar() {
  const { user } = useUser();

  return (
    <nav className="navbar">
      {user !== null && (
        <ul className="navbar__list">
          <li>
            <NavLink to="/translations" className="navbar__link">
              Translations
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="navbar__link">
              Profile
            </NavLink>
          </li>
          <li>
            <div className="navbar__profile-image-container">
              <ProfileImage />
              <div className="navbar__profile-image-overlay"></div>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
