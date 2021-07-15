import React from "react";
import "./image.css";

export default function Image(props) {
  return <img src={props.src} alt={props.alt} />;
}
