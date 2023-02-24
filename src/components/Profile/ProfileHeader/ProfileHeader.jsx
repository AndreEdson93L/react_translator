import React from "react";
import "./ProfileHeader.css";

function ProfileHeader({ username }) {
  return <div className="profile-header">Welcome {username}!</div>;
}

export default ProfileHeader;
