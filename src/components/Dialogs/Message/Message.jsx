import React from "react";
import classes from "./Message.module.css";

const Message = ({ text }) => {
  const { message } = classes;
  return <li className={message}>{text}</li>;
};

export default Message;
