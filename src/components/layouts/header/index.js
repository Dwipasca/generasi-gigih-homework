import React, { useState } from "react";
import style from "./header.module.css";

import Button from "../../button";

const Header = ({ loginSpotify, namePage }) => {
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
        <h2>{namePage}</h2>
      </div>
      <div className={style["menu"]}>
        <Button
          onClick={(e) => handleButtonLoginClick(e)}
          buttonStyle="btn-success"
          buttonSize="btn-medium"
          type="button"
        >
          {isLogin === true ? "login spotify" : "logout spotify"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
