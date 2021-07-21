import React, { useState, useEffect } from "react";

import style from "./search.module.css";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_ID;
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/";
const SCOPE = "playlist-modify-private";

export default function Search() {
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);

  const getTokenFromUrl = (hash) => {
    const stringAfterHastag = hash.substring(1);
    const paramInUrl = stringAfterHastag.split("&");
    const paramSplitUp = paramInUrl.reduce((acc, currentValue) => {
      // console.log(currentValue);
      const [key, value] = currentValue.split("=");
      acc[key] = value;
      return acc;
    }, {});
    return paramSplitUp;
  };

  const handleButtonLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE}&response_type=token&show_dialog=true`;
  };

  useEffect(() => {
    if (window.location.hash) {
      const { access_token } = getTokenFromUrl(window.location.hash);
      // console.log(access_token, token_type, expires_in);
      setToken(access_token);
    }
    console.log(datas);
  }, []);

  const buttonHandleSearch = () => {
    fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=10`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((data) => setDatas(data.tracks.items));
  };
  console.log(datas);

  return (
    <div className={style["wrapper"]}>
      <div className={style["navbar"]}>
        <button onClick={handleButtonLogin}>Login in Spotify</button>
      </div>

      <div className={style["search-bar"]}>
        <input
          id="search-input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button id="search-btn" onClick={buttonHandleSearch}>
          Search
        </button>
      </div>

      <div className={style["wrapper-table"]}>
        {datas ? (
          <table className={style["track-list"]}>
            <thead>
              <tr>
                <th>#</th>
                <th>Title | Artist</th>
                <th>Album</th>
                <th>Release Date</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, idx) => {
                return (
                  <tr key={data.id}>
                    <td>{idx + 1}</td>
                    <td>
                      <img src={data.album.images[2].url} alt={data.name} />
                      {data.name}
                    </td>
                    <td>{data.album.name}</td>
                    <td>{data.album.release_date}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <tr>
            <td colSpan="5" style={{ color: "white" }}>
              Tidak ada Data
            </td>
          </tr>
        )}
      </div>
    </div>
  );
}
