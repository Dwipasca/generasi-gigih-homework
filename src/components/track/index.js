import React, { useState } from "react";

import style from "./track.module.css";

const Track = ({ track, playlist, setPlaylist, id }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleButtonSelect = (e) => {
    let uri = e.target.value;
    setIsSelected(!isSelected);
    if (playlist.includes(uri)) {
      // alert("DATA SUDAH ADA");
      let newPlaylist = playlist.filter((track) => track !== uri);
      setPlaylist(newPlaylist);
      console.log("NEW ARRAY TRACKS: " + newPlaylist);
    } else {
      // alert("data belum ada");
      setPlaylist([...playlist, uri]);
    }
  };
  return (
    <tbody>
      <tr>
        <td rowSpan="2">{id + 1}</td>
        <td rowSpan="2">
          <img src={track.album.images[2].url} />
        </td>
        <td>{track.name}</td>
        <td rowSpan="2">{track.album.type}</td>
        <td rowSpan="2">{track.album.release_date}</td>
        <td rowSpan="2">
          <button onClick={handleButtonSelect} className={style["btn-select"]}>
            {isSelected ? "Deselect" : "Select"}
          </button>
        </td>
      </tr>
      <tr>
        <td>{track.artists[0].name}</td>
      </tr>
    </tbody>
  );
};

export default Track;
