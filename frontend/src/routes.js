import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import New from "./pages/New";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {" "}
        {/*Switch ensures that only one route will be called at time */}
        <Route path="/" exact component={Login} />{" "}
        {/* exact is used to ensures that the path will be called only if the route contains excatly the path value */}
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}
