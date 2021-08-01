import React from "react";

import Track from "./trackItem";

const TrackList = ({ tracks, selectedTracks, setSelectedTracks }) => {
  return tracks.map((track, id) => {
    return (
      <Track
        key={track.id}
        track={track}
        id={id}
        selectedTracks={selectedTracks}
        setSelectedTracks={setSelectedTracks}
      />
    );
  });
};

export default TrackList;
