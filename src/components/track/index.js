import React from "react";
import style from "./track.module.css";
import Image from "../image";
import TagP from "../tagP";

export default function Track({ image, title }) {
  return (
    <div className={style.track_list}>
      <Image src={image} alt={title} />
      <TagP value={title} />
    </div>
  );
}
