import React, { useState, useEffect } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Avatar,
  Button,
} from "@material-ui/core";
import useStyles from "../../styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import FriendVerse from "../../images/FriendVerse.png";
import { LOGOUT } from "../../constants/actionTypes";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(user);
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const logOut = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
    setUser(null);
  };
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
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar alt={user.profile?.name} src={user.profile?.picture}>
                {user.profile?.name.charAt(0)}
              </Avatar>
              <Typography variant="h6">{user.profile?.name}</Typography>
              <Button
                variant="contained"
                color="secondary"
                className={classes.authButton}
                onClick={logOut}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="primary"
              className={classes.authButton}
              onClick={logOut}
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
