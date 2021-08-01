import React, { useState } from "react";

// ? lib third party
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

//  ? components
import SearchBar from "components/searchBar";
import FormCreatePlaylist from "components/formCreatePlaylist";
import TrackList from "components/trackList";
import TrackSkeleton from "components/trackSkeleton";
import Navbar from "components/layouts/navbar";

// ! reducer area
import { storeTracksList } from "redux/trackListSlice";

//  ? style import css
import style from "./createPlaylist.module.css";

// ? api
import {
  getSearchTracks,
  createNewPlaylist,
  storeTracksToNewPlaylist,
} from "api/apiSpotify";

export default function CreatePlaylist() {
  // ? use data from redux store
  const token = useSelector((state) => state.user.accessToken);
  const userID = useSelector((state) => state.user.data.id);
  const tracks = useSelector((state) => state.tracks.tracksList);

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTracks, setSelectedTracks] = useState([]);

  const [postPlaylist, setPostPlaylist] = useState({
    name: "",
    description: "",
    public: false,
    collaborative: false,
  });

  const buttonHandleSearch = () => {
    setIsLoading(true);
    if (search === "") {
      toast.error("Search can't be empty");
    } else {
      getSearchTracks(search, token).then((data) => {
        dispatch(storeTracksList(data.tracks.items));
        setIsLoading(false);
      });
      setSearch("");
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

      toast.success("Create New Playlist Has Been Successfully.");

      setPostPlaylist({
        name: "",
        description: "",
      });
      setSelectedTracks([]);
    }
  };

  return (
    <div>
      <Navbar />
      <div className={style["wrapper-create-playlist"]}>
        <h3>Create Playlist</h3>
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
            <TrackList
              tracks={tracks}
              selectedTracks={selectedTracks}
              setSelectedTracks={setSelectedTracks}
            />
          )}
        </div>

        <div className={style["form-create-playlist"]}>
          {selectedTracks.length > 0 && (
            <FormCreatePlaylist
              postPlaylist={postPlaylist}
              setPostPlaylist={setPostPlaylist}
              handleFormSubmit={handleFormSubmit}
            />
          )}
        </div>
        <Toaster position="top-right" />
      </div>
    </div>
  );
}
