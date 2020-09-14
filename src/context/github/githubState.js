import React, { useReducer } from "react";

import axios from "axios";

import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

const GithubState = (props) => {
  const INITIAL_STATE = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    err: null,
  };

  const [state, dispatch] = useReducer(GithubReducer, INITIAL_STATE);

  //search User
  const searchUsers = (text) => {
    setLoading();
    axios
      .get(`https://api.github.com/search/users?q=${text}`)
      .then((res) => {
        dispatch({
          type: "SET_USERS",
          payload: res.data.items,
        });
        setLoaded();
      })
      .catch((err) => {
        console.log(err);
        setLoaded();
      });
  };

  //clear users
  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  //set One User
  const setOneUser = (username) => {
    setLoading();
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        dispatch({
          type: "SET_ONE_USER",
          payload: res.data,
        });
        setLoaded();
      })
      .catch((err) => {
        console.log(err);
        setLoaded();
      });
  };

  //set repos
  const setRepos = (username) => {
    setLoading();
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        dispatch({
          type: "SET_REPOS",
          payload: res.data,
        });
        setLoaded();
      })
      .catch((err) => {
        console.log(err);
        setLoaded();
      });
  };

  //set alertmessage
  const setAlertMessage = (message) => {
    dispatch({
      type: "GET_ERROR",
      payload: message,
    });

    setTimeout(() => {
      dispatch({
        type: "CLEAR_ERROR",
      });
    }, 5000);
  };

  //set loading
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });
  //set loaded
  const setLoaded = () =>
    dispatch({
      type: "SET_LOADED",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        err: state.err,
        loading: state.loading,
        searchUsers,
        clearUsers,
        setOneUser,
        setRepos,
        setAlertMessage,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
