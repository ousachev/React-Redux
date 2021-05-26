import React, { useEffect} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getUserProfile,
  updateStatus,
  getUserStatus
} from "../../redux/profileReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Profile from "./Profile";

const  ProfileContainer =(props)=> {
  const { getUserProfile, match, getUserStatus } = props;

  useEffect(()=>{
    let userId = match.params.userId;
    if (!userId) {
      userId = 2;
    }
    getUserProfile(userId);
    getUserStatus(userId);
  },[])

    return <Profile {...props} />;
}

let mapStateToProps = ({ profilePage }) => {
  return {
    profile: profilePage.profile,
    status: profilePage.status
  };
};

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
