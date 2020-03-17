const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newMessage
      };
    }
    case SEND_NEW_MESSAGE: {
      let messageItem = state.newMessageText;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 7, text: messageItem }],
        newMessageText: ""
      };
    }
    default:
      return state;
  }
};

export const updateNewMessageText = newMessage => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newMessage: newMessage
});
export const sendNewMessage = () => ({ type: SEND_NEW_MESSAGE });
export default dialogsReducer;
