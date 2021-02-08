import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./Navigation.module.css";

const navigationList = [
  { name: "BurgerBuilder", path: "/", exact: true },
  { name: "Order", path: "/orders" },
  { name: "Auth", path: "/auth" },
];

const Navigation = () => {
  const menu = navigationList.map((item) => (
    <NavigationItem
      key={item.name}
      exact={item.exact ? item.exact : false}
      link={item.path}
    >
      {item.name}
    </NavigationItem>
  ));
  return (
    <nav>
      <ul className={classes.Navigation}>{menu}</ul>
    </nav>
  );
};

export default Navigation;
