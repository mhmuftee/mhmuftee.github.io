import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "../src/pages/home";

export default function Nav() {
  return (
    <Router basename="https://mhmuftee.github.io">
     <Switch>
        <Route path="/home" component={Home} />
        <Route path="*" component={Home} />
      </Switch>
    </Router>
  );
}