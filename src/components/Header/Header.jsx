import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = ({ isAuth, login, logout }) => {
  let { header, logo, loginBlock, headerContainer, loginOn } = classes;
  return (
    <header className={header}>
      <div className={headerContainer}>
        <img
          className={logo}
          src="https://blog.pioneers.com.ua/wp-content/uploads/2019/01/logo-1.png"
          alt=""
        />

        <div className={loginBlock}>
          {isAuth ? (
            <div className={loginOn}>
              {login}-
              <a href="/login" onClick={logout}>
                Logout
              </a>
            </div>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
