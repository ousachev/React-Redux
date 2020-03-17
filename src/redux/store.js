import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
  _state: {
    dialogsPage: {
      dialogData: [
        { name: "Evgeny", id: "1" },
        { name: "Oleg", id: "2" },
        { name: "Petr", id: "3" },
        { name: "Max", id: "4" },
        { name: "Sergey", id: "5" },
        { name: "Evgeny", id: "6" }
      ],
      messagesData: [
        { id: 1, text: "Hi" },
        { id: 2, text: "Bye" },
        { id: 3, text: "Dye" },
        { id: 4, text: "Cry" },
        { id: 5, text: "Fly" },
        { id: 6, text: "Try" }
      ],
      newMessageText: ""
    },
    profilePage: {
      postData: [
        { id: 1, message: "Hello my Friend", likesCount: 3 },
        { id: 2, message: "Reaaaaaaact", likesCount: 24 }
      ],
      newPostText: "Hello"
    },
    sideBar: {}
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  }
};

export default store;

window.store = store;
