import React, { useEffect } from "react";
import { storageSave } from "../../utils/storage";
import { userById } from "../../api/user";
import ProfileActions from "../../components/Profile/ProfileActions";
import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTranslationHistory from "../../components/Profile/ProfileTranslationHistory/ProfileTranslationHistory";
import { STORAGE_KEY_USER } from "../../const/storageKey";
import { useUser } from "../../context/UserContext";
import withAuth from "../../hoc/withAuth";
import "./Profile.css";

const Profile = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    const findUser = async () => {
      const [error, latestUser] = await userById(user.id);
      if (error === null) {
        storageSave(STORAGE_KEY_USER, latestUser);
        setUser(latestUser);
      }
    };

    //findUser()
  }, [setUser, user.id]);

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <ProfileHeader username={user.username} />
      <ProfileActions />
      <ProfileTranslationHistory translations={user.translations} />
    </div>
  );
};

export default withAuth(Profile);
