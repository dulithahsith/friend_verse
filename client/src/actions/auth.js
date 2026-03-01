import * as api from "../api";

export const signIn = (form, history) => {
  try {
    //sign in..
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signUp = (form, history) => {
  try {
    //sign Up..
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
