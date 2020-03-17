import React from "react";
import classes from "./Dialog.module.css";
import { NavLink } from "react-router-dom";
const Dialog = ({ name, id }) => {
  let { user } = classes;
  let path = "dialogs/" + id;
  return (
    <li className={user}>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};

export default Dialog;
