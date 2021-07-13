import { toUpper } from "lodash";
import React from "react";
import Data from "../constants/Data";

import "./createPlaylist.css";

export default function CreatePlaylist() {
  return (
    <div className="create-playlist">
      <h1>Create Playlist</h1>
      <div className="create-playlist-detail">
        <img src={Data.album.images[1].url} alt={Data.album.id} />
        <div className="details">
          <p>{toUpper(Data.album.type)}</p>
          <p className="details-title">{Data.album.name}</p>
          <p>{toUpper(Data.album.artists[0].name)}</p>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
