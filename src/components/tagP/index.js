import React from "react";
import style from "./tagP.module.css";

export default function TagP({ value }) {
  return <p className={style.p}>{value}</p>;
}
