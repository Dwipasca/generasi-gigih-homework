import React from "react";

import convertMusicDuration from "services/convertMusicDuration";
import convertTrackTitle from "services/convertTrackTitle";

import Image from "assets/images/not-found.jpg";

import style from "./trackItem.module.css";

type TrackItem = {
  track: {
    album: {
      images: {
        [index: number]: {
          url: string;
        };
      };
      release_date: string;
    };
    name: string;
    artists: {
      [index: number]: {
        name: string;
      };
    };
    duration_ms: number;
    uri: string;
  };
  id: string;
  selectedTracks: Array<string>;
  setSelectedTracks: (query: string[]) => void;
};

const Track = ({ track, id, selectedTracks, setSelectedTracks }: TrackItem) => {
  const handleButtonSelect = (id: string): void => {
    let uri: string = id;
    if (selectedTracks.includes(uri)) {
      let newPlaylist: string[] = selectedTracks.filter(
        (track) => track !== uri
      );
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
        <img
          src={track.album.images[2]?.url ?? Image}
          alt={track?.name}
          style={{ width: "64px", height: "64px" }}
        />
      </div>
      <div className={style["track-title"]}>
        <p data-testid="track-name">{convertTrackTitle(track.name)}</p>
      </div>
      <div className={style["track-artist"]}>
        <p data-testid="track-artist">{track.artists[0]?.name}</p>
      </div>

      <div className={style["track-date"]}>
        <p data-testid="track-date">{track.album.release_date}</p>
      </div>
      <div className={style["track-duration"]}>
        <p data-testid="track-duration">
          {convertMusicDuration(track.duration_ms)}
        </p>
      </div>
      <div className={style["track-action"]}>
        <button
          onClick={() => handleButtonSelect(track?.uri)}
          className={style["btn-select"]}
        >
          {selectedTracks.includes(track.uri) ? "Deselect" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default Track;
