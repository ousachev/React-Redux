import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  getUserProfile,
  updateStatus,
  getUserStatus
} from "../../redux/profileReducer";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";
import Profile from "./Profile";

export class ProfileContainer extends Component {
  componentDidMount() {
    const { getUserProfile, match, getUserStatus } = this.props;
    let userId = match.params.userId;
    if (!userId) {
      userId = 2;
    }
    getUserProfile(userId);
    getUserStatus(userId);
  }

  render() {
    return <Profile {...this.props} />;
  }
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
