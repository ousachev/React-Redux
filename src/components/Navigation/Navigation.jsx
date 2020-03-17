import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  let { nav, nav__list, nav__item, nav__link, active } = classes;
  return (
    <nav className={nav}>
      <ul className={nav__list}>
        <li className={nav__item}>
          <NavLink
            className={nav__link}
            activeClassName={active}
            to="/profile"
            exact
          >
            Profile
          </NavLink>
        </li>
        <li className={nav__item}>
          <NavLink className={nav__link} activeClassName={active} to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className={nav__item}>
          <NavLink className={nav__link} activeClassName={active} to="/users">
            Users
          </NavLink>
        </li>
        <li className={nav__item}>
          <NavLink className={nav__link} activeClassName={active} to="/news">
            News
          </NavLink>
        </li>
        <li className={nav__item}>
          <NavLink className={nav__link} activeClassName={active} to="/music">
            Music
          </NavLink>
        </li>
        <li className={nav__item}>
          <NavLink
            className={nav__link}
            activeClassName={active}
            to="/settings"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
