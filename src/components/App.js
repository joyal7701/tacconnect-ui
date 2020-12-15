import React, { Component } from "react";
import Home from "./Home";
import Store from "./Store";
import Profile from "./Profile";
import Faqs from "./Faqs";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" exact component={Store} />
          <Route path="/contact" component={Contact}></Route>
          <Route path="/faqs" component={Faqs}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
