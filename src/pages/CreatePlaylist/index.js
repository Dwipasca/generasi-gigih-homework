import { toUpper } from "lodash";
import React from "react";
import Data from "../../constants/Data";
import Button from "../../components/button";
import Image from "../../components/image";
import TagP from "../../components/tagP";

import style from "./createPlaylist.module.css";

export default function CreatePlaylist() {
  return (
    <div className={style["wrapper-create-playlist"]}>
      <div className={style["page-title"]}>
        <h2>Create Playlist</h2>
      </div>

      <div>
        <div>
          <Image src={Data.album.images[1].url} alt={Data.album.id} />
        </div>

        <div>
          <TagP value={toUpper(Data.album.type)} />
          <TagP value={Data.album.name} />
          <TagP value={toUpper(Data.album.artists[0].name)} />
          <Button name="Search" />
        </div>
      </div>
    </div>
  );
}
