import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileItem from "./ProfileItem/ProfileItem";
// import classes from "./Profile.module.css";

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <div>
      <ProfileItem
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />

      <MyPostsContainer />
    </div>
  );
};

export default Profile;
