import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

import classes from "./ToolBar.module.css";

const ToolBar = () => {
  return (
    <header className={classes.Toolbar}>
      <Navigation />
      <Logo />
    </header>
  );
};

export default ToolBar;
