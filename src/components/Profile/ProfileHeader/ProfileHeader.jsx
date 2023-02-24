//#region ProfileHeader.jsx

/*
This is a simple component called ProfileHeader that takes in a prop 
username and displays a welcome message with the provided username.
When this component is rendered, it will display a div with the 
profile-header class and the text "Welcome {username}!" where {username} 
is replaced with the value of the username prop.
*/

//#endregion

import React from "react";
import "./ProfileHeader.css";

function ProfileHeader({ username }) {
  return <div className="profile-header">Welcome {username}!</div>;
}

export default ProfileHeader;
