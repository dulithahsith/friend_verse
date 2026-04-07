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
import { AUTH } from "../../constants/actionTypes";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { signUp, signIn, googleSignIn } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [form, setForm] = useState(initialState);
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => setIsSignUp((currentMode) => !currentMode);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signUp(form, history));
    } else {
      dispatch(signIn(form, history));
    }
  };
  const googleSuccess = async (credentialResponse) => {
    try {
      console.log("----------------");
      console.log(credentialResponse); // contains res.credential
      console.log("----------------");
      const token = credentialResponse?.access_token;
      // const res = await fetch(
      //   "https:www.googleapis.com/oauth2/v1/userinfo?alt=json",
      //   { headers: { Authorization: `Bearer ${token}` } },
      // );
      // const profile = await res.json();
      // console.log(profile);

      dispatch(googleSignIn({ token }, history));
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
      <Paper className={classes.authPaper} elevation={3}>
        <div className={classes.authHeader}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" className={classes.formTitle}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Typography>
        </div>
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
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleOAuthProvider
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          >
            <GoogleButton />
          </GoogleOAuthProvider>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} className={classes.authSwitch}>
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
