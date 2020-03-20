import React from "react";
import Dialog from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = ({
  dialogsPage: { dialogData, messagesData, newMessageText },
  sendNewMessage,
  updateNewMessageText,
  isAuth
}) => {
  let dialogArrays = dialogData.map(dialog => {
    return <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />;
  });
  let messagesArrays = messagesData.map(message => {
    return <Message text={message.text} id={message.id} key={message.id} />;
  });

  let { dialogs, users, messages } = classes;

  let onMessageSendClick = () => {
    sendNewMessage();
  };
  let onNewMessageChange = e => {
    let newMessage = e.target.value;
    updateNewMessageText(newMessage);
  };

  return (
    <div className={dialogs}>
      <ul className={users}>{dialogArrays}</ul>
      <div>
        <ul className={messages}>{messagesArrays}</ul>
        <textarea
          onChange={onNewMessageChange}
          value={newMessageText}
          placeholder="Enter your message..."
        ></textarea>
        <button onClick={onMessageSendClick}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
