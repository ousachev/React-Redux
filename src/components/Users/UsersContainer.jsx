import React, { useState} from "react";
import { connect } from "react-redux";
import {
  follow,
  toggleIsFollowing,
  unfollow,
  getUsers
} from "../../redux/usersReducer";
import Preloader from "../Preloader/Preloader";
import UsersFunc from "./UsersFunc";

const UsersContainer =(props)=> {
  const { getUsers, totalUsers,
    users,
    pageSize,
    currentPage,
    follow,
    unfollow,
    isLoading,
    isFollowing } = props;

  useState(()=>{
      getUsers(currentPage, pageSize);
    },[])

 const onPageChanged = pageNum => {
    getUsers(pageNum, pageSize);
  };

    return (
      <>
        {isLoading ? (
          <Preloader />
        ) : (
          <UsersFunc
            onPageChanged={onPageChanged}
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
