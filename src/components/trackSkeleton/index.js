import React from "react";

import style from "./trackSkeleton.module.css";

const TrackSkeleton = () => {
  return (
    <div className={style["wrapper-track-list"]}>
      <div className={style["track-number"]}></div>
      <div className={style["track-image"]}></div>
      <div className={style["track-title"]}></div>
      <div className={style["track-artist"]}></div>

      <div className={style["track-duration"]}></div>
      <div className={style["track-action"]}></div>
    </div>
  );
};

export default TrackSkeleton;
