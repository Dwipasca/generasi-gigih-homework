import React, { useState, useEffect } from "react";

import TrackList from "../../components/trackList";
import MessageNotFound from "../../components/messageNotFound";
import Button from "../../components/button";
import FormCreateNewPlaylist from "../../components/formCreateNewPlaylist";

import style from "./createPlaylist.module.css";

import {
  getProfile,
  getSearchTracks,
  createNewPlaylist,
  storeTracksToNewPlaylist,
} from "../../services/apiSpotify";

export default function CreatePlaylist({ getAccessTokenFromURL }) {
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

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);
      setToken(access_token);
      getProfile(access_token).then((data) => setUserID(data.id));
    }
  }, [getAccessTokenFromURL]);

  const buttonHandleSearch = () => {
    if (search === "") {
      alert("Search Cannot Be Empty");
    } else {
      getSearchTracks(search, token).then((data) =>
        setTracks(data.tracks.items)
      );
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (playlist.length <= 0) {
      alert("You have to selected song first");
    } else {
      createNewPlaylist(userID, token, postPlaylist).then((newPlaylist) =>
        storeTracksToNewPlaylist(newPlaylist.id, token, playlist).then((data) =>
          console.log(data)
        )
      );
      alert("Create New Playlist Has Been Successfully");
      setPostPlaylist({
        name: "",
        description: "",
      });
      setPlaylist([]);
    }
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

      {tracks.length > 0 ? (
        <div className={style["list-track"]}>
          <FormCreateNewPlaylist
            postPlaylist={postPlaylist}
            setPostPlaylist={setPostPlaylist}
            handleFormSubmit={handleFormSubmit}
          />
          <TrackList
            tracks={tracks}
            playlist={playlist}
            setPlaylist={setPlaylist}
          />
        </div>
      ) : (
        <MessageNotFound search={search} />
      )}

      {/* <div className={style["form-create-playlist"]}></div> */}
    </div>
  );
}
