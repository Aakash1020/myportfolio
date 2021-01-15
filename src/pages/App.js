import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./About"
import Navbar from "./Navbar"
import Body from "./Body"
import "./styles/App.css"

function app() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Body />
      </Switch>
    </Router>
  )
}

export default app
