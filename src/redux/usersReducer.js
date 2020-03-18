import { userAPI } from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";
const SET_IS_LOADING = "SET_IS_LOADING";
const TOGGLE_IS_FOLLOWING = "TOGGLE_IS_FOLLOWING";

let initialState = {
  users: [],
  pageSize: 30,
  currentPage: 1,
  totalUsers: 0,
  isLoading: true,
  isFollowing: []
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW": {
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.id) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    }
    case "UNFOLLOW": {
      return {
        ...state,
        users: [
          ...state.users.map(user => {
            if (user.id === action.id) {
              return { ...user, followed: false };
            }
            return user;
          })
        ]
      };
    }
    case "SET_USERS": {
      return { ...state, users: [...action.users] };
    }
    case "SET_TOTAL_USERS": {
      return { ...state, totalUsers: action.totalUsers };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.isLoading };
    }
    case "TOGGLE_IS_FOLLOWING": {
      return {
        ...state,
        isFollowing: action.isLoading
          ? [...state.isFollowing, action.id]
          : [state.isFollowing.filter(id => id !== action.id)]
      };
    }
    default:
      return state;
  }
};
export const follow = userID => ({ type: FOLLOW, id: userID });
export const unfollow = userID => ({ type: UNFOLLOW, id: userID });
export const setUsers = users => ({
  type: SET_USERS,
  users
});
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const setTotalUsers = totalUsers => ({
  type: SET_TOTAL_USERS,
  totalUsers
});
export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  isLoading
});
export const toggleIsFollowing = (isLoading, userID) => ({
  type: TOGGLE_IS_FOLLOWING,
  isLoading,
  id: userID
});

export const getUsers = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setIsLoading(true));
    userAPI.getUsers(currentPage, pageSize).then(response => {
      dispatch(setUsers(response.items));
      dispatch(setTotalUsers(response.totalCount / 4));
      dispatch(setIsLoading(false));
    });
  };
};

export default usersReducer;
