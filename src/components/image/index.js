import React from "react";
import style from "./image.module.css";

export default function Image(props) {
  return <img className={style.img} src={props.src} alt={props.alt} />;
}
