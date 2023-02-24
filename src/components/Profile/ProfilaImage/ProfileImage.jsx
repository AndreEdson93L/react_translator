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
