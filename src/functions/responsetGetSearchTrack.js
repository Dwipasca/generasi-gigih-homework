const responsetGetSearchTrack = (search, token, setTracks) => {
  fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=10`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((res) => res.json())
    .then((data) => setTracks(data.tracks.items));
};

export default responsetGetSearchTrack;
