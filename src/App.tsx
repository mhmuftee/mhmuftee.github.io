import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"

export default function Nav() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}
