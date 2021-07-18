import React from "react";
import style from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <button> + Create Playlist</button>
    </div>
  );
}
