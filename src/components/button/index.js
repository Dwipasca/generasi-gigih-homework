import React from "react";
import style from "./button.module.css";

export default function Button({ name }) {
  return <button className={style.button}>{name}</button>;
}
