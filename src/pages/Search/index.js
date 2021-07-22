import React, { useState, useEffect } from "react";

import TrackList from "../../components/trackList";
import MessageNotFound from "../../components/messageNotFound";

import style from "./search.module.css";

export default function Search({ getAccessTokenFromURL }) {
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      setToken(access_token);
    }
  }, []);

  const buttonHandleSearch = () => {
    if (search === "") {
      alert("Search Cannot Empty");
    } else {
      fetch(
        `https://api.spotify.com/v1/search?q=${search}&type=track&limit=10`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => setTracks(data.tracks.items));
    }
  };

  return (
    <div className={style["wrapper-search"]}>
      <div className={style["search-bar"]}>
        <input
          id="input-search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button id="btn-search" onClick={buttonHandleSearch}>
          Search
        </button>
      </div>

      <div className={style["list-track"]}>
        {tracks.length > 0 ? (
          <TrackList
            tracks={tracks}
            playlist={playlist}
            setPlaylist={setPlaylist}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        ) : (
          <MessageNotFound search={search} />
        )}
      </div>
    </div>
  );
}
