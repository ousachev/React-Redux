import React from "react";
import userPhoto from "../../assets/images/1.png";
import classes from "./UsersFunc.module.css";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
const UsersFunc = ({
  users,
  follow,
  unfollow,
  totalUsers,
  currentPage,
  pageSize,
  onPageChanged,
  toggleIsFollowing,
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
                    toggleIsFollowing(true, user.id);
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "26f8766b-034d-4092-b8b3-79a879ee6969"
                          }
                        }
                      )
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          follow(user.id);
                        }
                        toggleIsFollowing(false, user.id);
                      });
                  }}
                  className={followButton}
                >
                  FOLLOW
                </button>
              ) : (
                <button
                  disabled={isFollowing.some(id => id === user.id)}
                  onClick={() => {
                    toggleIsFollowing(true, user.id);
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "26f8766b-034d-4092-b8b3-79a879ee6969"
                          }
                        }
                      )
                      .then(response => {
                        if (response.data.resultCode === 0) {
                          unfollow(user.id);
                        }
                        toggleIsFollowing(false, user.id);
                      });
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
