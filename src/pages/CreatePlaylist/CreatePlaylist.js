import { toUpper } from "lodash";
import React from "react";
import Data from "../../constants/Data";
import Button from "../../components/button";
import Image from "../../components/image";
import TagP from "../../components/tagP";
import TrackList from "../../components/track";
import Datas from "../../constants/ListMusic";

import "./createPlaylist.css";

export default function CreatePlaylist() {
  return (
    <div className="create-playlist">
      <h1>Create Playlist</h1>

      <div className="create-playlist-detail">
        <Image src={Data.album.images[1].url} alt={Data.album.id} />
        <div className="details">
          <TagP value={toUpper(Data.album.type)} />
          <TagP value={Data.album.name} />
          <TagP value={toUpper(Data.album.artists[0].name)} />
          <Button name="Search" />
        </div>
      </div>

      <div className="list-track">
        <TrackList />
        {/* {Datas.map((data) => {
          console.log(data.album.images[1].url);
          return (
            <div>
              <TrackList
                key={data.id}
                image={data.album.images[1].url}
                title={data.name}
              />
              <TagP value={data.name} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
