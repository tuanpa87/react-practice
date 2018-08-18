import * as actionTypes from "./actionTypes";
import axios from "axios";

const authStart = () => ({
  type: actionTypes.AUTH_START
});

const authSuccess = (token, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  tokenId: token,
  userId: userId
});

const authFail = err => ({
  type: actionTypes.AUTH_FAIL,
  error: err
});

const checkAuthTimeout = expirationTime => dispatch => {
  setTimeout(() => dispatch(logout()), expirationTime * 1000);
};

export const logout = () => {
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const auth = (email, password, isSignup) => dispatch => {
  dispatch(authStart());
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true
  };
  let url =
    "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyA6w-440pD4JiANTk1QT57PMGPhmAqJ9U4";
  if (!isSignup) {
    url =
      "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyA6w-440pD4JiANTk1QT57PMGPhmAqJ9U4";
  }

  axios
    .post(url, authData)
    .then(response => {
      console.log(response);

      const expirationDate = new Date(
        new Date().getTime() + response.data.expiresIn * 1000
      );
      localStorage.setItem("expirationDate", expirationDate);
      localStorage.setItem("token", response.data.idToken);
      localStorage.setItem("userId", response.data.localId);
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    })
    .catch(err => {
      console.log(err.response);
      dispatch(authFail(err.response.data.error));
    });
};

export const setAuthRedirectPath = path => ({
  type: actionTypes.SET_AUTH_REDIRECT_PATH,
  path: path
});

export const authCheckState = () => dispatch => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch(logout());
  } else {
    const expirationDate = new Date(localStorage.getItem("expirationDate"));

    if (expirationDate <= new Date()) {
      dispatch(logout());
    } else {
      const userId = localStorage.getItem("userId");
      dispatch(authSuccess(token, userId));
      dispatch(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
};
