//#region ProfileActions.jsx

/*
This component renders a single button with the text "Clear History". 
When the button is clicked, the handleClearHistoryClick function is called. 
This function displays a confirmation dialog using the window.confirm 
function. If the user clicks "OK" in the confirmation dialog, it calls 
the translationClearHistory function with the user's id. If there is an 
error in the translationClearHistory function, the function returns 
without doing anything. If there is no error, the function updates the 
user object by setting the translations array to an empty array. 
Then it saves the updated user object to local storage using the 
storageSave function and sets the updated user object as the new user 
object in the UserContext using the setUser function.
Finally, the component returns the button with an onClick handler that 
calls handleClearHistoryClick when clicked.
*/

//#endregion

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
