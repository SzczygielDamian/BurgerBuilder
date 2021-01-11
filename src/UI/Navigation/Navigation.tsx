import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from './Navigation.module.css'

const Navigation = () => (
  <nav>
    <ul className={classes.Navigation}>
      <NavigationItem exact link="/" active>
        BurgerBuilder
      </NavigationItem>
      <NavigationItem link="/orders">Order</NavigationItem>
      <NavigationItem link="/auth">Auth</NavigationItem>
    </ul>
  </nav>
);

export default Navigation;
