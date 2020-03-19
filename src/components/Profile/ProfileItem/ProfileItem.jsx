import React from "react";
import classes from "./ProfileItem.module.css";
import Preloader from "../../Preloader/Preloader";
import avatar from "../../../assets/images/1.png";
const ProfileItem = ({ profile }) => {
  let { profileDesc, profileBlock, profileAvatar } = classes;

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={profileBlock}>
      <img
        className={profileAvatar}
        src={!profile.photos.large ? avatar : profile.photos.large}
        alt=""
      />
      <div className={profileDesc}>
        <div>Статус:{profile.aboutMe}</div>
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
