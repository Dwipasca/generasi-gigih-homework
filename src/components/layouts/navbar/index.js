import React from "react";

// ? style from css
import style from "./navbar.module.css";

// ? lib third party
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// ? reducer
import { logout } from "../../../redux/userSlice";

const Navbar = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className={style["wrapper-navbar"]}>
      <div className={style["logo"]}>
        <h2>Spotify</h2>
      </div>
      <div className={style["menus"]}>
        <button className={style["menu"]}>Search</button>
        <button className={style["menu"]}>Create Playlist</button>
        <button onClick={handleLogoutClick} className={style["menu"]}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
