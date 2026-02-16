import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";

import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import FriendVerse from "./images/FriendVerse.png";
import { Box, Container, AppBar, Typography, Grow } from "@material-ui/core";
import useStyles from "./styles";

import Practice from "./practice";

const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          FriendsVerse
        </Typography>
        <Box
          component="img"
          src={FriendVerse}
          alt="Friendsverse"
          className={classes.image}
        />
      </AppBar>
      <Grow in>
        <Container>
          <Box className={classes.content}>
            <Box className={classes.posts}>
              <Posts setCurrentId={setCurrentId} />
            </Box>
            <Box className={classes.form}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Box>
          </Box>
        </Container>
      </Grow>
      <Practice />
    </Container>
  );
};

export default App;
