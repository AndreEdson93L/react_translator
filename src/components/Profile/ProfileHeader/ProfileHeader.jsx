import React from 'react';
import './ProfileHeader.css';

function ProfileHeader({username}) {
  return (
    <div className="profile-header">
      <strong>Welcome {username}!</strong>
    </div>
  );
}

export default ProfileHeader;
