import React from "react";
import classes from "./ProfileItem.module.css";
import avatar from "../../../assets/images/1.png";
import ProfileStatus from "./ProfileStatus";
import Preloader from "./../../Preloader/Preloader";

const ProfileItem = ({ profile, status, updateStatus }) => {
  let { profileDesc, profileBlock, profileAvatar } = classes;

  if (!profile) return <Preloader />;

  return (
    <div className={profileBlock}>
      <img
        className={profileAvatar}
        src={!profile.photos.large ? avatar : profile.photos.large}
        alt=""
      />
      <div className={profileDesc}>
        <ProfileStatus status={status} updateStatus={updateStatus} />
        <ul>
          {Object.entries(profile.contacts).map(item => {
            return <li key={item[0]}>{item[1]}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProfileItem;
