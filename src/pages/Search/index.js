import React, { useState, useEffect } from "react";

import TrackList from "../../components/trackList";
import MessageNotFound from "../../components/messageNotFound";
import Button from "../../components/button";
import style from "./search.module.css";

export default function Search({ getAccessTokenFromURL }) {
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      setToken(access_token);
    }
  }, [getAccessTokenFromURL]);

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
        <Button
          onClick={buttonHandleSearch}
          buttonStyle="btn-success"
          buttonSize="btn-medium"
          type="button"
        >
          Search
        </Button>
      </div>

      <div className={style["list-track"]}>
        {tracks.length > 0 ? (
          <TrackList
            tracks={tracks}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        ) : (
          <MessageNotFound search={search} />
        )}
      </div>
    </div>
  );
}
