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
