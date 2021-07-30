import React from "react";

import style from "./home.module.css";

import { loginAuthorizeSpotify } from "../../services/authSpotify";

const Home = () => {
  const HandleButtonLoginClick = () => {
    loginAuthorizeSpotify();
  };

  return (
    <div className={style["wrapper-home"]}>
      <div className={style["banner"]}>
        <h1>Mencari musik?</h1>
        <p>Mulai mendengarkan rilis baru terbaik.</p>

        <button onClick={HandleButtonLoginClick}>BUKA PEMUTAR WEB</button>
      </div>
    </div>
  );
};

export default Home;
