import React from "react";
import { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Avatar,
  Button,
} from "@material-ui/core";
import useStyles from "../../styles";
import { Link } from "react-router-dom";
import FriendVerse from "../../images/FriendVerse.png";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          FriendsVerse
        </Typography>
        <Box
          component="img"
          src={FriendVerse}
          alt="Friendsverse"
          className={classes.image}
        />
        <Typography>
          {user ? (
            <div>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography variant="h6">{user.result.name}</Typography>
              <Button
                variant="contained"
                color="secondary"
                className={classes.authButton}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
              className={classes.authButton}
            >
              <center>Sign In</center>
            </Button>
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
