import React, { useState } from "react";

//  ? components
import SearchBar from "components/searchBar";
import TrackList from "components/trackList";
import TrackSkeleton from "components/trackSkeleton";
import Modal from "components/modal";
import Navbar from "components/layouts/navbar";

// ? lib third party
import { useAppSelector, useAppDispatch } from "redux/store";

import toast, { Toaster } from "react-hot-toast";
import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";

// ? api
import { getSearchTracks, createNewPlaylist, storeTracksToNewPlaylist } from "api/apiSpotify";

// ! reducer area
import { setTracks } from "redux/playlistSlice";

export default function CreatePlaylist() {
  const dispatch = useAppDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const token = useAppSelector((state) => state.auth.accessToken);
  const userID = useAppSelector((state) => state.auth.user?.id);
  const tracks = useAppSelector((state) => state.playlist.tracks);

  console.log(userID);

  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedTracks, setSelectedTracks] = useState([]);

  const [postPlaylist, setPostPlaylist] = useState({
    name: "",
    description: "",
  });

  const buttonHandleSearch = () => {
    setIsLoading(true);
    if (search === "") {
      toast.error("Search can't be empty");
    } else {
      getSearchTracks(search, token).then((data) => {
        dispatch(setTracks(data.tracks.items));
        setIsLoading(false);
      });
      setSearch("");
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (selectedTracks.length <= 0) {
      toast.error("You have to selected song first");
    } else {
      createNewPlaylist(userID, token, postPlaylist).then((newPlaylist) =>
        storeTracksToNewPlaylist(newPlaylist.id, token, selectedTracks).then((data) =>
          console.log(data)
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
    <Flex w="100%" h="100%" minH="100vh" flexDir="column">
      <Navbar />
      <Flex p="10" flexDir="column">
        <Heading as="h4" size="md">
          Search
        </Heading>
        <Flex flexDir="row" alignItems="flex-start" justifyContent="space-between">
          <SearchBar
            search={search}
            setSearch={setSearch}
            buttonHandleSearch={buttonHandleSearch}
          />
          <Button
            width={200}
            alignSelf="flex-end"
            onClick={onOpen}
            colorScheme="green"
            isDisabled={selectedTracks.length > 0 ? false : true}
          >
            Create Playlist
          </Button>
        </Flex>
      </Flex>
      <Flex flexDir="column" pl="20" pr="20">
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
      </Flex>
      <Toaster position="top-right" />
      <Modal
        handleFormSubmit={handleFormSubmit}
        postPlaylist={postPlaylist}
        setPostPlaylist={setPostPlaylist}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Flex>
  );
}
