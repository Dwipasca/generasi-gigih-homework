import React from "react";
import style from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={style["wrapper-sidebar"]}>
      <div className={style["logo"]}>
        <h2>Music Player</h2>
      </div>
      <div className={style["menu"]}>
        <button> Create Playlist</button>
        <button> Search</button>
      </div>
    </div>
  );
}
