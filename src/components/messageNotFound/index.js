import React from "react";

import style from "./messageNotFound.module.css";

const MessageNotFound = ({ search }) => {
  return (
    <div className={style["message-not-found"]}>
      <h3>No results found for "{search}"</h3>
      <p>
        Please mae sure your words are spelled correctly or use less or
        different keywords.
      </p>
    </div>
  );
};

export default MessageNotFound;
