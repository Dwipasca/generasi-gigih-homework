import React, { useState } from "react";
import style from "./header.module.css";

const Header = ({ loginSpotify }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleButtonLoginClick = (e) => {
    setIsLogin(!isLogin);
    // alert(isLogin);

    if (isLogin === true) {
      loginSpotify();
      // alert("berhasil");
    }
  };

  return (
    <div className={style["wrapper-header"]}>
      <div className={style["page-title"]}>
        <h2>Create Playlist</h2>
      </div>
      <div className={style["menu"]}>
        <button
          id="btn-login-spotify"
          onClick={(e) => handleButtonLoginClick(e)}
          value={isLogin}
        >
          {isLogin === true ? "login spotify" : "logout spotify"}
        </button>
      </div>
    </div>
  );
};

export default Header;
