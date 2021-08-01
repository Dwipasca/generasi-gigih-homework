const convertMusicDuration = (duration) => {
  let minutes = Math.floor(duration / 60000);
  let seconds = ((duration % 60000) / 1000).toFixed(0);

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default convertMusicDuration;
