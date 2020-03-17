import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileItem from "./ProfileItem/ProfileItem";
// import classes from "./Profile.module.css";

const Profile = props => {
  return (
    <div>
      <ProfileItem profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
