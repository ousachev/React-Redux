import React from "react";
import userPhoto from "../../assets/images/1.png";
import classes from "./UsersFunc.module.css";
import { NavLink } from "react-router-dom";

const UsersFunc = ({
  users,
  follow,
  unfollow,
  totalUsers,
  currentPage,
  pageSize,
  onPageChanged,
  isFollowing
}) => {
  const {
    leftSide,
    rightSide,
    usersList,
    userItem,
    userAvatar,
    userDesc,
    userCity,
    userCountry,
    followButton,
    userLocation,
    userName,
    userStatus,
    unfollowButton,
    pageList,
    curPage
  } = classes;
  let pagesCount = Math.ceil(totalUsers / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <>
      <ul className={pageList}>
        {pages.map(pageNum => {
          return (
            <li
              onClick={() => onPageChanged(pageNum)}
              className={currentPage === pageNum ? curPage : ""}
              key={pageNum + "id"}
            >
              {pageNum}
            </li>
          );
        })}
      </ul>
      <div className={usersList}>
        {users.map(user => (
          <div className={userItem} key={user.id}>
            <div className={leftSide}>
              <NavLink to={"/profile/" + user.id}>
                <div className={userAvatar}>
                  <img
                    style={{ width: 80, height: 80 }}
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                    alt="ava"
                  />
                </div>
              </NavLink>
              {!user.followed ? (
                <button
                  disabled={isFollowing.some(id => id === user.id)}
                  onClick={() => {
                    follow(user.id);
                  }}
                  className={followButton}
                >
                  FOLLOW
                </button>
              ) : (
                <button
                  disabled={isFollowing.some(id => id === user.id)}
                  onClick={() => {
                    unfollow(user.id);
                  }}
                  className={unfollowButton}
                >
                  UNFOLLOW
                </button>
              )}
            </div>
            <div className={rightSide}>
              <div className={userDesc}>
                <span className={userName}>{user.name}</span>
                <span className={userStatus}>{"user.status"}</span>
              </div>
              <div className={userLocation}>
                <div className={userCity}>{"user.location.city"}</div>
                <div className={userCountry}>{"user.location.country"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersFunc;
