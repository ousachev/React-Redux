import React from "react";
import { updatePostText, addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  };
};

const MyPostContainer = connect(mapStateToProps, { updatePostText, addPost })(
  MyPosts
);

export default MyPostContainer;
