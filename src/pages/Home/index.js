import React, { useEffect } from "react";

// ?lib third party
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// ? api
import { loginAuthorizeSpotify, getAccessTokenFromURL } from "api/authSpotify";
import { getProfile } from "api/apiSpotify";

// ? style import css
import style from "./home.module.css";

// ! reducer area
import { login, storeUserData } from "redux/userSlice";

const Home = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      dispatch(login(access_token));
      getProfile(access_token).then((data) => dispatch(storeUserData(data)));
      history.push("/create-playlist");
    }
  }, [dispatch, history]);

  return (
    <div className={style["wrapper-home"]}>
      <div className={style["banner"]}>
        <h1>Web Music Player </h1>
        <p>Welcome human, this is my app spotify clone </p>
        <button onClick={loginAuthorizeSpotify}>PLEASE LOGIN FIRST</button>
      </div>
    </div>
  );
};

export default Home;
