//#region ProfileLogout.jsx
/*
This component is responsible for rendering a Logout button and handling 
the user's logout action. It uses the useUser hook from the UserContext 
to access the current user data and setUser function to update the user 
data after the logout. The handleLogoutClick function is triggered 
when the user clicks on the Logout button, and it shows a confirmation 
window to ensure the user's intention to logout. If the user confirms, 
it deletes the user data from the local storage using the storageDelete 
function and updates the user data to null using the setUser function 
from the UserContext.
*/
//#endregion

import React from "react";
import { useUser } from "../../context/UserContext";
import { storageDelete } from "../../utils/storage";
import { STORAGE_KEY_USER } from "../../const/storageKey";

function ProfileLogout() {

  const { user, setUser } = useUser();

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      // Send an event to the parent
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  return <button onClick={handleLogoutClick}>Logout</button>;
}

export default ProfileLogout;
