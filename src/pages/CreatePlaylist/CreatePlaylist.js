import { toUpper } from "lodash";
import React from "react";
import Data from "../../constants/Data";
import Button from "../../components/button";
import Image from "../../components/image";
import TagP from "../../components/tagP";

import "./createPlaylist.css";

export default function CreatePlaylist() {
  let style = "details-title";
  return (
    <div className="create-playlist">
      <h1>Create Playlist</h1>
      <div className="create-playlist-detail">
        <Image src={Data.album.images[1].url} alt={Data.album.id} />
        <div className="details">
          <TagP value={toUpper(Data.album.type)} />
          <TagP style={style} value={Data.album.name} />
          <TagP value={toUpper(Data.album.artists[0].name)} />
          <Button name="Search" />
        </div>
      </div>
    </div>
  );
}
