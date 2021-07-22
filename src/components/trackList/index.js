import React, { useState } from "react";

import Track from "../../components/track";

import style from "./trackList.module.css";

const TrackList = ({ tracks, playlist, setPlaylist }) => {
  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Title</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Action</th>
        </tr>
      </thead>
      {tracks.map((track, id) => {
        // console.log(track);
        return (
          <Track
            key={track.id}
            id={id}
            track={track}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        );
      })}
    </table>
  );
};

export default TrackList;
