import React from "react";

import { render, screen } from "@testing-library/react";
import convertTrackTitle from "services/convertTrackTitle";
import convertMusicDuration from "services/convertMusicDuration";

import TrackItem from "./index";

const fakeTrack = {
  album: {
    images: [
      {
        height: 640,
        url: "https://i.scdn.co/image/ab67616d0000b2737ae2f53cf686124393716fe0",
        width: 640,
      },
      {
        height: 300,
        url: "https://i.scdn.co/image/ab67616d00001e027ae2f53cf686124393716fe0",
        width: 300,
      },
      {
        height: 64,
        url: "https://i.scdn.co/image/ab67616d000048517ae2f53cf686124393716fe0",
        width: 64,
      },
    ],
    release_date: "23-02-2018",
  },
  artists: [
    {
      name: "Blackpink",
    },
  ],

  duration_ms: 310350,
  id: "asdfhaksdja;",
  name: "Whistle",
  uri: "spotify:track:5orWOyd3hzYUIhxBs6QpdV",
};

const SelectedTracks = [];

describe("TrackItem", () => {
  it("Tracks Item can show successfully", () => {
    render(
      <TrackItem
        track={fakeTrack}
        selectedTracks={
          SelectedTracks.includes(fakeTrack.uri) ? "Deselect" : "Select"
        }
      />
    );

    const artistName = screen.getByTestId("track-artist");
    const trackName = screen.getByTestId("track-name");
    const duration = screen.getByTestId("track-duration");
    const releseDate = screen.getByTestId("track-date");

    expect(artistName).toHaveTextContent(fakeTrack.artists[0].name);
    expect(trackName).toHaveTextContent(convertTrackTitle(fakeTrack.name));
    expect(duration).toHaveTextContent(
      convertMusicDuration(fakeTrack.duration_ms)
    );
    expect(releseDate).toHaveTextContent(
      convertTrackTitle(fakeTrack.album.release_date)
    );
  });
});
