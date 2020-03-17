import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageText,
  sendNewMessage
} from "../../redux/dialogsReducer";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    dialogsPage: state.dialogsPage
  };
};

const DialogsContainer = connect(mapStateToProps, {
  sendNewMessage,
  updateNewMessageText
})(Dialogs);

export default DialogsContainer;
