import React from "react";
import jwtDecode from "jwt-decode";

import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/home";
import PostDetails from "./components/PostDetails/PostDetails";

import { Container } from "@material-ui/core";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Auth from "./components/Auth/auth";

const App = () => {
  const getStoredUser = () => {
    try {
      const profile = JSON.parse(localStorage.getItem("profile"));
      const accessToken = profile?.accessToken;

      if (!accessToken) {
        return null;
      }

      const decodedToken = jwtDecode(accessToken);

      if (!decodedToken?.exp || decodedToken.exp * 1000 <= Date.now()) {
        localStorage.removeItem("profile");
        return null;
      }

      return profile;
    } catch (error) {
      localStorage.removeItem("profile");
      return null;
    }
  };

  const user = getStoredUser();

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
      </Container>
    </BrowserRouter>
  );
};

export default App;
