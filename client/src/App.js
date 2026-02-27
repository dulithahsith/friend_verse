import React, { useEffect, useState } from "react";

import Navbar from "./components/navbar/navbar";
import Home from "./components/Home/home";
import { Container } from "@material-ui/core";

import Practice from "./practice";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/auth";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
        <Practice />
      </Container>
    </BrowserRouter>
  );
};

export default App;
