const convertTrackTitle = (title) => {
  if (title.length > 25) {
    return title.substring(0, 25) + "...";
  }
  return title;
};

export default convertTrackTitle;
