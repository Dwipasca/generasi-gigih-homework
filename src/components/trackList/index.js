import React from "react";

import style from "./trackList.module.css";

const TrackList = ({ tracks }) => {
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
        return (
          <tbody key={track.id}>
            <tr>
              <td rowSpan="2">{id + 1}</td>
              <td rowSpan="2">
                <img src={track.album.images[2].url} />
              </td>
              <td>{track.name}</td>
              <td rowSpan="2">{track.album.type}</td>
              <td rowSpan="2">{track.album.release_date}</td>
              <td rowSpan="2">
                <button>Select</button>
              </td>
            </tr>
            <tr>
              <td>{track.artists[0].name}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

export default TrackList;
