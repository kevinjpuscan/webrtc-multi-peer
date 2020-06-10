export const useClearVideo = (id, content) => {
  let video = document.querySelector('[data-socket="' + id + '"]');
  content.current.removeChild(video);
};
