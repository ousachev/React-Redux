import React, { Component } from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setIsLoading,
  setTotalUsers,
  setUsers,
  unfollow,
  toggleIsFollowing
} from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import { getUsers } from "./../../api/api";
import UsersFunc from "./UsersFunc";

export class UsersContainer extends Component {
  componentDidMount() {
    const {
      setIsLoading,
      setUsers,
      setTotalUsers,
      currentPage,
      pageSize
    } = this.props;
    setIsLoading(true);
    getUsers(currentPage, pageSize).then(response => {
      setUsers(response.items);
      setTotalUsers(response.totalCount / 4);
      setIsLoading(false);
    });
  }

  onPageChanged = pageNum => {
    const { setIsLoading, setUsers, setCurrentPage, pageSize } = this.props;
    setCurrentPage(pageNum);
    setIsLoading(true);
    getUsers(pageNum, pageSize).then(response => {
      setUsers(response.items);
      setIsLoading(false);
    });
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
      toggleIsFollowing,
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
            toggleIsFollowing={toggleIsFollowing}
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
  setUsers,
  setCurrentPage,
  setTotalUsers,
  setIsLoading,
  toggleIsFollowing
})(UsersContainer);
