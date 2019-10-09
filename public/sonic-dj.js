$(document).ready(() => {
  const socket = io();

  const playLoop = djState => {
    socket.emit("btnPressed", djState);
  };

  const playSample = djState => {
    socket.emit("samplePressed", djState);
  };

  $(".sample").click(event => {
    playSample(event);
  });

  $(".play").click(event => {
    playLoop(event);
  });
});
