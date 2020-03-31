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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE: {
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          { id: 7, text: action.newMessageBody }
        ]
      };
    }
    default:
      return state;
  }
};

export const sendNewMessage = newMessageBody => ({
  type: SEND_NEW_MESSAGE,
  newMessageBody
});
export default dialogsReducer;
