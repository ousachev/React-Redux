import React from "react";
import classes from "./ProfileItem.module.css";
import Preloader from "../../Preloader/Preloader";

const ProfileItem = ({ profile }) => {
  let { profileDesc, profileBlock } = classes;

  if (!profile) {
    return <Preloader />;
  }
  return (
    <div className={profileBlock}>
      <img src={profile.photos.large} alt="" />
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
