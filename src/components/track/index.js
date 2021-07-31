import React from "react";

import convertDuration from "../../functions/convertDuration";

import style from "./trackList.module.css";

const Track = ({ track, id, selectedTracks, setSelectedTracks }) => {
  const handleButtonSelect = (e) => {
    let uri = e.target.value;
    if (selectedTracks.includes(uri)) {
      let newPlaylist = selectedTracks.filter((track) => track !== uri);
      setSelectedTracks(newPlaylist);
    } else {
      setSelectedTracks([...selectedTracks, uri]);
    }
  };
  return (
    <div className={style["wrapper-track-list"]}>
      <div className={style["track-number"]}>
        <p>{id + 1}</p>
      </div>
      <div className={style["track-image"]}>
        <img src={track.album?.images[2].url} alt={track.name} />
      </div>
      <div className={style["track-title"]}>
        <p>{track?.name}</p>
      </div>
      <div className={style["track-artist"]}>
        <p>{track.artists[0]?.name}</p>
      </div>

      <div className={style["track-duration"]}>
        {convertDuration(track?.duration_ms)}
      </div>
      <div className={style["track-action"]}>
        <button
          onClick={(e) => handleButtonSelect(e)}
          value={track?.uri}
          className={style["btn-select"]}
        >
          {selectedTracks.includes(track?.uri) ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default Track;
