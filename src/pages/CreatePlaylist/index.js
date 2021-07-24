import React, { useState, useEffect } from "react";

import TrackList from "../../components/trackList";
import MessageNotFound from "../../components/messageNotFound";
import Button from "../../components/button";
import style from "./createPlaylist.module.css";

import responsetGetSearchTrack from "../../functions/responsetGetSearchTrack";

export default function CreatePlaylist({ getAccessTokenFromURL, getProfile }) {
  const [token, setToken] = useState("");
  const [userID, setUserID] = useState("");
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [postPlaylist, setPostPlaylist] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostPlaylist({ ...postPlaylist, [name]: value });
  };

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      setToken(access_token);
      getProfile(access_token).then((data) => setUserID(data.id));
    }
  }, [getAccessTokenFromURL]);

  const buttonHandleSearch = () => {
    if (search === "") {
      alert("Search Cannot Empty");
    } else {
      responsetGetSearchTrack(search, token, setTracks);
    }
  };

  const createNewPlaylist = (obj) => {
    fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        name: obj.name,
        public: false,
        collaborative: false,
        description: obj.description,
      }),
    })
      .then((res) => res.json())
      .then((data) => storeTrackstoPlaylist(data.id));
  };

  const storeTrackstoPlaylist = (playlistId) => {
    const uri = playlist.map((track) => track);

    fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?position=0&uris=${uri}`,
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uris: uri,
          position: 0,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    setPlaylist([]);
    setPostPlaylist({
      name: "",
      description: "",
      public: false,
      collaborative: false,
    });
    alert("Create Playlist berhasil");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createNewPlaylist(postPlaylist);
  };

  return (
    <div className={style["wrapper-create-playlist"]}>
      <div className={style["search-bar"]}>
        <p>Let's find something for your new playlist</p>
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

      <div className={style["form"]}>
        <form onSubmit={handleFormSubmit}>
          <label>Name Playlist</label>
          <input
            id="name"
            name="name"
            type="text"
            minLength="10"
            value={postPlaylist.name}
            onChange={handleChange}
          />
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            minLength="20"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Create Playlist</button>
        </form>
      </div>
    </div>
  );
}
