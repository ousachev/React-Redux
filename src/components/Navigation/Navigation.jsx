import React from "react";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const links = [
  {title:'Profile',route:'/profile'},
  {title:'Messages',route:'/dialogs'},
  {title:'Users',route:'/users'},
  {title:'News',route:'/news'},
  {title:'Music',route:'/music'},
  {title:'Settings',route:'/settings'},
]

const Nav = () => {
  const { nav, nav__list, nav__item, nav__link, active } = classes;
  return (
    <nav className={nav}>
      <ul className={nav__list}>
        {links.map(link=>{
          return  <li className={nav__item}>
            <NavLink
                className={nav__link}
                activeClassName={active}
                to={link.route}
                exact
            >
              {link.title}
            </NavLink>
          </li>
        })}

      </ul>
    </nav>
  );
};

export default Nav;
