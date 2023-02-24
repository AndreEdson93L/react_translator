//#region ProfileImage.jsx

/*
This is a React component called ProfileImage that displays a 
user's profile image and allows them to log out. 
It uses the useUser hook to access information about the 
currently logged-in user and the storageDelete function to 
delete the user's information from local storage when they log out.
The component has local state showLogout which is initially 
set to false and controls whether the logout button is shown. 
When the user clicks on the profile image, handleClick function 
is called which toggles the value of showLogout. When the logout 
button is clicked, handleLogout function is called which deletes 
the user's information from local storage and sets the user 
to null using the setUser function.
The component also has a useEffect hook that adds a click event 
listener to the document. This event listener checks if the user
 clicks outside of the profile-image-container and if so, sets 
 showLogout to false.
The ProfileImage component is used in the Navbar component to 
display the user's profile image and handle log out.
*/

//#endregion

import React from "react";
import { useUser } from "../../../context/UserContext";
import { storageDelete } from "../../../utils/storage";
import { STORAGE_KEY_USER } from "../../../const/storageKey";
import "./ProfileImage.css";

function ProfileImage() {
  const [showLogout, setShowLogout] = React.useState(false);
  const { user, setUser } = useUser();


  function handleClick() {
    setShowLogout((showLogout) => !showLogout);
  }

  function handleLogout() {
    if (window.confirm("Are you sure?")) {
      // Send an event to the parent
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };
  

  React.useEffect(() => {
    function handleDocumentClick(event) {
      if (!event.target.closest('.profile-image-container')) {
        setShowLogout(false);
      }
    }

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className="profile-image-container">
      <img
        className="profile-image"
        src="./resources/Logo.png"
        alt="Profile"
        onClick={handleClick}
      />
      {showLogout && (
        <div className="logout-container">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
