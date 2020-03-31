import React from "react";
import Dialog from "./Dialog/Dialog";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "./../../assets/formControls/FormControls";

const maxLength70 = maxLengthCreator(70);

const Dialogs = ({
  dialogsPage: { dialogData, messagesData, newPostText },
  sendNewMessage
}) => {
  let dialogArrays = dialogData.map(dialog => {
    return <Dialog name={dialog.name} id={dialog.id} key={dialog.id} />;
  });
  let messagesArrays = messagesData.map(message => {
    return <Message text={message.text} id={message.id} key={message.id} />;
  });

  let { dialogs, users, messages } = classes;

  let addNewMessage = values => {
    sendNewMessage(values.newMessageText);
  };

  return (
    <div className={dialogs}>
      <ul className={users}>{dialogArrays}</ul>
      <div>
        <ul className={messages}>{messagesArrays}</ul>
        <DialogsFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};

export const DialogsForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={Textarea}
        name="newMessageText"
        placeholder="Enter your message..."
        validate={[maxLength70]}
      />
      <button>Send</button>
    </form>
  );
};

export const DialogsFormRedux = reduxForm({ form: "dialogsForm" })(DialogsForm);

export default Dialogs;
