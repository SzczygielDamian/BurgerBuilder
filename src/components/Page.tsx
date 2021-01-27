import React from "react";
import { Route, Switch } from "react-router";

import BurgerBuilder from "../conteiners/BurgerBuilder/BurgerBuilder";
import Checkout from "../conteiners/Checekout/Checkout";
import OrdersContainer from "../conteiners/OrdersContainer/Orders";
import Auth from "../conteiners/Auth/Auth";

const Page = () => {
  return (
    <div>
        <Switch>
          <Route exact path="/" component={BurgerBuilder} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={OrdersContainer} />
          <Route path="/auth" component={Auth} />
        </Switch>   
    </div>
  );
};

export default Page;
