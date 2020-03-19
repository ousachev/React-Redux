import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

export class ProfileContainer extends Component {
  componentDidMount() {
    const { getUserProfile, match } = this.props;
    let userId = match.params.userId;
    if (!userId) {
      userId = 2;
    }
    getUserProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = state => {
  return {
    profile: state.profilePage.profile
  };
};

let ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(
  ProfileContainerWithRouter
);
