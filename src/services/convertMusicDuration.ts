const convertMusicDuration = (duration: number): string | number => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);

    return `${minutes}:${seconds}`;
};

export default convertMusicDuration;
