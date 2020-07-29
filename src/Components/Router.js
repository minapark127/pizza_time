import React from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "Routes/Home";
import Movie from "Routes/Movie";
import Tv from "Routes/Tv";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <HashRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/movie" component={Movie}></Route>
      <Route path="/tv" component={Tv}></Route>
      <Route path="/search" component={Search}></Route>
      <Redirect from="*" to="/" />
    </Switch>
  </HashRouter>
);
