const loginSpotify = () => {
  let CLIENT_ID = process.env.REACT_APP_SPOTIFY_ID;
  let SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
  let REDIRECT_URL_AFTER_LOGIN = process.env.REACT_APP_BASE_URL;
  let SCOPE = "playlist-modify-private";

  window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPE}&response_type=token&show_dialog=true`;
};

const getAccessTokenFromURL = (hash) => {
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

export { loginSpotify, getAccessTokenFromURL };
