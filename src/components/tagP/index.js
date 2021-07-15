import React from "react";
import "./tagP.css";

export default function TagP(props) {
  return <p className={props.style}>{props.value}</p>;
}
