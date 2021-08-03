import React from "react";

import style from "./form.module.css";

const FormCreatePlaylist = ({
  postPlaylist,
  setPostPlaylist,
  handleFormSubmit,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostPlaylist({ ...postPlaylist, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit} className={style["form"]}>
      <label htmlFor="name">Name </label>
      <input
        id="name"
        name="name"
        type="text"
        minLength="10"
        value={postPlaylist.name}
        onChange={handleChange}
        autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        minLength="20"
        value={postPlaylist.description}
        onChange={handleChange}
        rows="10"
        cols="30"
        autoComplete="off"
      ></textarea>
      <button type="submit">Create New Playlist</button>
    </form>
  );
};

export default FormCreatePlaylist;
