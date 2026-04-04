import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/home";
import PostDetails from "./components/PostDetails/PostDetails";

import { Container } from "@material-ui/core";

import Practice from "./practice";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Auth from "./components/Auth/auth";

const App = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" component={PostDetails} />
          <Route
            path="/auth"
            exact
            component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
          />
        </Switch>
        <Practice />
      </Container>
    </BrowserRouter>
  );
};

export default App;
