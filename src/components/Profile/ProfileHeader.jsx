import React from 'react'

function ProfileHeader({username}) {
  return (
    <div>You are logged as: <strong>{username}</strong></div>
  )
}

export default ProfileHeader