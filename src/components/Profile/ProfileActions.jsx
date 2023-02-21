import React from "react";
import { Link } from "react-router-dom";
import { orderClearHistory } from "../../api/order";
import { STORAGE_KEY_USER } from "../../const/storageKey";
import { useUser } from "../../context/UserContext";
import { storageDelete, storageSave } from "../../utils/storage";

function ProfileActions() {
  const { user,  setUser } = useUser();

  const handleLogoutClick = () => {
    if (window.confirm("Are you sure?")) {
      // Send an event to the parent
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  const handleClearHistoryClick = async () => {
    if(!window.confirm('Are you sure?\nThis can not be undone.')) {
      return
    }

    const [clearError] = await orderClearHistory(user.id)
    
    if(clearError !== null){
      return
    }
    
    const updatedUser = {
      ...user,
      orders: []
    }

    storageSave(STORAGE_KEY_USER, updatedUser)
    setUser(updatedUser)
  }

  return (
    <ul>
      <li>
        <Link to="/orders">Orders</Link>
      </li>
      <li>
        <button onClick={handleClearHistoryClick}>Clear History</button>
      </li>
      <li>
        <button onClick={handleLogoutClick}>Logout</button>
      </li>
    </ul>
  );
}

export default ProfileActions;
