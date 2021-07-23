import React from "react";

import Track from "../../components/track";

import style from "./trackList.module.css";

const TrackList = ({ tracks, playlist, setPlaylist }) => {
  console.log(tracks);
  return (
    <table className={style["table"]}>
      <thead>
        <tr>
          <th>#</th>
          <th></th>
          <th>Title</th>
          <th>Release Date</th>
          <th>Duration</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
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
      </tbody>
    </table>
  );
};

export default TrackList;
