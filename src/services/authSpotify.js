const CLIENT_ID = process.env.REACT_APP_SPOTIFY_ID;
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = process.env.REACT_APP_BASE_URL;
const SCOPE = ["playlist-modify-private", "user-read-email"];

const loginAuthorizeSpotify = () => {
  window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE}&response_type=token&show_dialog=true`;
};

const getAccessTokenFromURL = (hash) => {
  const stringAfterHastag = hash.substring(1);
  const paramInUrl = stringAfterHastag.split("&");
  const paramSplitUp = paramInUrl.reduce((acc, currentValue) => {
    const [key, value] = currentValue.split("=");
    acc[key] = value;
    return acc;
  }, {});
  return paramSplitUp;
};

export { loginAuthorizeSpotify, getAccessTokenFromURL };
