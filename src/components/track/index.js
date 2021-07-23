import React, { useState } from "react";

import style from "./track.module.css";

const Track = ({ track, playlist, setPlaylist, id }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleButtonSelect = (e) => {
    let uri = e.target.value;
    setIsSelected(!isSelected);
    if (playlist.includes(uri)) {
      let newPlaylist = playlist.filter((track) => track !== uri);
      setPlaylist(newPlaylist);
    } else {
      setPlaylist([...playlist, uri]);
    }
  };

  return (
    <tr>
      <td>{id + 1}</td>
      <td>
        <img src={track.album.images[2].url} alt={track.name} />
      </td>
      <td>
        <p>{track.name}</p>
        <p>{track.artists[0].name}</p>
      </td>
      <td>{track.album.type}</td>
      <td>{track.album.release_date}</td>
      <td>
        <button
          onClick={(e) => handleButtonSelect(e)}
          value={track.uri}
          className={style["btn-select"]}
        >
          {playlist.includes(track.uri) ? "Deselect" : "Select"}
        </button>
      </td>
    </tr>
  );
};

export default Track;
