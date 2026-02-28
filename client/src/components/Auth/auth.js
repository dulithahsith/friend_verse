import React, { useState } from "react";
import {
  Avatar,
  Button,
  Typography,
  Paper,
  Grid,
  Container,
} from "@material-ui/core";
import useStyles from "../../styles";
import Input from "./input";
import { useGoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Icon from "./icon";
import { useDispatch } from "react-redux";

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => setIsSignUp((currentMode) => !currentMode);
  const handleChange = () => {};
  const handleSubmit = () => {};
  const googleSuccess = async (credentialResponse) => {
    console.log(credentialResponse); // contains res.credential
    const token = credentialResponse?.credential;
    const res = await fetch(
      "https:www.googleapis.com/oauth2/v3/userinfo?alt=json",
      { headers: { Authorization: `Bearer ${token}` } },
    );
    const profile = await res.json();

    try {
      dispatch({ type: "AUTH", data: { profile: profile, token: token } });
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Login was not successfull");
  };
  const GoogleButton = () => {
    const login = useGoogleLogin({
      onSuccess: googleSuccess,
      onError: googleFailure,
    });

    return (
      <Button
        className={classes.googleButton}
        color="primary"
        fullWidth
        onClick={() => login()}
        startIcon={<Icon />}
        variant="contained"
      >
        Google Sign In
      </Button>
    );
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className="classes.paper" elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          <center>{isSignup ? "Sign Up" : "Sign In"}</center>
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Confirm Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            <center> {isSignup ? "Sign Up" : "Sign In"}</center>
          </Button>
          <GoogleOAuthProvider clientId="486481498459-48vt73gen4niuh90j2cftpiltjuatosb.apps.googleusercontent.com">
            <GoogleButton />
          </GoogleOAuthProvider>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an Account? Sign In"
                  : "Don't have an Account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};
export default Auth;
