import React, { Component } from "react";
import { connect } from "react-redux";
import {
  follow,
  toggleIsFollowing,
  unfollow,
  getUsers
} from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import UsersFunc from "./UsersFunc";

export class UsersContainer extends Component {
  componentDidMount() {
    const { getUsers, currentPage, pageSize } = this.props;
    getUsers(currentPage, pageSize);
  }

  onPageChanged = pageNum => {
    const { getUsers, pageSize } = this.props;
    getUsers(pageNum, pageSize);
  };

  render() {
    const {
      totalUsers,
      users,
      pageSize,
      currentPage,
      follow,
      unfollow,
      isLoading,
      isFollowing
    } = this.props;
    return (
      <>
        {isLoading ? (
          <Preloader />
        ) : (
          <UsersFunc
            onPageChanged={this.onPageChanged}
            users={users}
            totalUsers={totalUsers}
            pageSize={pageSize}
            currentPage={currentPage}
            follow={follow}
            unfollow={unfollow}
            isFollowing={isFollowing}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  const {
    usersPage: {
      users,
      pageSize,
      currentPage,
      totalUsers,
      isLoading,
      isFollowing
    }
  } = state;
  return {
    users,
    pageSize,
    currentPage,
    totalUsers,
    isLoading,
    isFollowing
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  toggleIsFollowing,
  getUsers
})(UsersContainer);
