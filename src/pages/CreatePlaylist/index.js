import React, { useState, useEffect } from "react";

// import MessageNotFound from "../../components/messageNotFound";
import SearchBar from "../../components/searchBar";
import FormCreateNewPlaylist from "../../components/formCreateNewPlaylist";
import Track from "../../components/track";
import TrackSkeleton from "../../components/trackSkeleton";

// ! redux area
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/tokenSlice";

import style from "./createPlaylist.module.css";

import {
  getProfile,
  getSearchTracks,
  createNewPlaylist,
  storeTracksToNewPlaylist,
} from "../../services/apiSpotify";

export default function CreatePlaylist({ getAccessTokenFromURL }) {
  const token = useSelector((state) => state.token.value);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const [userID, setUserID] = useState("");
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [postPlaylist, setPostPlaylist] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getAccessTokenFromURL(window.location.hash);

      dispatch(setToken(access_token));

      getProfile(access_token).then((data) => setUserID(data.id));
    }
  }, [dispatch, getAccessTokenFromURL]);

  const buttonHandleSearch = () => {
    setIsLoading(true);
    if (search === "") {
      alert("Search Cannot Be Empty");
    } else {
      getSearchTracks(search, token).then((data) => {
        setTracks(data.tracks.items);
        setIsLoading(false);
      });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedTracks.length <= 0) {
      alert("You have to selected song first");
    } else {
      createNewPlaylist(userID, token, postPlaylist).then((newPlaylist) =>
        storeTracksToNewPlaylist(newPlaylist.id, token, selectedTracks).then(
          (data) => console.log(data)
        )
      );
      alert("Create New Playlist Has Been Successfully");
      setPostPlaylist({
        name: "",
        description: "",
      });
      setSelectedTracks([]);
    }
  };

  return (
    <div className={style["wrapper-create-playlist"]}>
      <div className={style["search-bar"]}>
        <SearchBar
          search={search}
          setSearch={setSearch}
          buttonHandleSearch={buttonHandleSearch}
        />
      </div>

      <div className={style["list-track"]}>
        {isLoading ? (
          <div>
            <TrackSkeleton />
            <TrackSkeleton />
            <TrackSkeleton />
            <TrackSkeleton />
            <TrackSkeleton />
          </div>
        ) : (
          tracks.map((track, id) => {
            return (
              <Track
                key={track.id}
                track={track}
                id={id}
                selectedTracks={selectedTracks}
                setSelectedTracks={setSelectedTracks}
              />
            );
          })
        )}
      </div>

      <div className={style["form-create-playlist"]}>
        {selectedTracks.length > 0 && (
          <FormCreateNewPlaylist
            postPlaylist={postPlaylist}
            setPostPlaylist={setPostPlaylist}
            handleFormSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
}
