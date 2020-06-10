export const getUserMedia = () => {
  return new Promise((resolve, reject) => {
    navigator.getUserMedia = navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;
    const op = {
      video: {
        width: { min: 160, ideal: 640, max: 1280 },
        height: { min: 120, ideal: 360, max: 720 }
      },
      audio: true
    };

    navigator.getUserMedia(
      op,
      stream => {
        resolve(stream);
      },
      () => {}
    );
  });
};
