import React from "react";
import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style["wrapper-header"]}>
      <div className={style["page-title"]}>
        <h2>Create Playlist</h2>
      </div>
      <div className={style["menu"]}>
        <button>Login Spotify</button>
      </div>
    </div>
  );
}
