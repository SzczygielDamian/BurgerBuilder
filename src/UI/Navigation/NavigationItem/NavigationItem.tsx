import * as React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

export interface NavigationItemProps {
  exact?: boolean;
  link: string;
  children: string;
  active?: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  exact,
  link,
  children,
}) => (
  <li className={classes.NavigationItem}>
    <NavLink exact={exact} to={link}>
      {children}
    </NavLink>
  </li>
);

export default NavigationItem;
