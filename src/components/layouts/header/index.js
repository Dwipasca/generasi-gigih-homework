import React, { useState } from "react";
import style from "./header.module.css";

import Button from "../../button";

const Header = ({ loginAuthorizeSpotify, namePage }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleButtonLoginClick = () => {
    setIsLogin(!isLogin);
    if (isLogin === true) {
      loginAuthorizeSpotify();
    }
  };

  return (
    <div className={style["wrapper-header"]}>
      <div className={style["page-title"]}>
        <h2>{namePage}</h2>
      </div>
      <div className={style["menu"]}>
        <Button
          onClick={handleButtonLoginClick}
          buttonStyle="btn-success"
          buttonSize="btn-medium"
          type="button"
        >
          {isLogin ? "login spotify" : "logout spotify"}
        </Button>
      </div>
    </div>
  );
};

export default Header;
