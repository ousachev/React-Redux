import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
  postData: [
    { id: 1, message: "Hello my Friend", likesCount: 3 },
    { id: 2, message: "Reaaaaaaact", likesCount: 24 }
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [
          ...state.postData,
          { id: 5, message: action.newPostText, likesCount: 0 }
        ]
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    default:
      return state;
  }
};

export const addPost = newPostText => ({ type: ADD_POST, newPostText });

export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});
export const setStatus = status => ({
  type: SET_STATUS,
  status
});

export const getUserProfile = userId => dispatch => {
  profileAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data));
  });
};

export const getUserStatus = userId => dispatch => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data));
  });
};

export const updateStatus = status => dispatch => {
  profileAPI.setStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export default profileReducer;
