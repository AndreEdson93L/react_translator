import React from "react";
import { translationClearHistory } from "../../../api/translation";
import { STORAGE_KEY_USER } from "../../../const/storageKey";
import { useUser } from "../../../context/UserContext";
import { storageSave } from "../../../utils/storage";
import "./ProfileActions.css";

function ProfileActions() {
  const { user, setUser } = useUser();

  const handleClearHistoryClick = async () => {
    if (!window.confirm("Are you sure?\nThis can not be undone.")) {
      return;
    }

    const [clearError] = await translationClearHistory(user.id);

    if (clearError !== null) {
      return;
    }

    const updatedUser = {
      ...user,
      translations: [],
    };

    storageSave(STORAGE_KEY_USER, updatedUser);
    setUser(updatedUser);
  };

  return (
    <button className="clear-history-button" onClick={handleClearHistoryClick}>
      Clear History
    </button>
  );
}

export default ProfileActions;
