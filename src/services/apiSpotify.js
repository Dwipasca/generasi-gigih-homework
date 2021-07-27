const SPOTIFY_ENDPOINT = "https://api.spotify.com/v1";

const getProfile = (accessToken) => {
  return fetch(`${SPOTIFY_ENDPOINT}/me`, {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

const getSearchTracks = (search, accessToken) => {
  return fetch(`${SPOTIFY_ENDPOINT}/search?q=${search}&type=track&limit=10`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  }).then((res) => res.json());
};

const createNewPlaylist = (userID, accessToken, newPlaylist) => {
  return fetch(`${SPOTIFY_ENDPOINT}/users/${userID}/playlists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
    body: JSON.stringify({
      name: newPlaylist.name,
      public: false,
      collaborative: false,
      description: newPlaylist.description,
    }),
  }).then((res) => res.json());
};

const storeTracksToNewPlaylist = (newPlaylistId, accessToken, playlist) => {
  return fetch(
    `${SPOTIFY_ENDPOINT}/playlists/${newPlaylistId}/tracks?position=0&uris=${playlist}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({
        uris: playlist,
        position: 0,
      }),
    }
  ).then((res) => res.json());
};

export {
  getProfile,
  getSearchTracks,
  createNewPlaylist,
  storeTracksToNewPlaylist,
};
