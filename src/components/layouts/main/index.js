import React from "react";

import Sidebar from "../sidebar";
import Header from "../header";
import CreatePlaylist from "../../../pages/CreatePlaylist";

import style from "./main.module.css";

const Main = () => {
  return (
    <div className={style["wrapper-layout"]}>
      <div className={style["sidebar"]}>
        <Sidebar />
      </div>
      <div className={style["header"]}>
        <Header />
      </div>

      <div className={style["content"]}>
        <CreatePlaylist />
      </div>
    </div>
  );
};

export default Main;
