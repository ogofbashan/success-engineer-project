import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './Additional.css';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Navigation from "./Navigation";
import Location from "./Location";

//Added Location file for page tracking.

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Location />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
