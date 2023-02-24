//#region UserContext.jsx
/* This code creates a context for managing user state in a React application.
It defines a UserProvider component that manages the user state using useState 
and storageRead.
It also defines a useUser hook that can be used to access the user state 
within the UserProvider component.
*/
//#endregion

import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKey";
import { storageRead } from "../utils/storage";

// Context -> exposing
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext); // { user, setUser }
};

// Provider -> managing state
const UserProvider = ({ children }) => {
  
  const [ user, setUser ] = useState(storageRead(STORAGE_KEY_USER))

  const state = {
    user,
    setUser,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserProvider;
