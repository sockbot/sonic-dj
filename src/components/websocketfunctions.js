import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

function sendLoopData(data) {
  socket.emit("btnPressed", data);
}

function sendSampleData(data) {
  let sampleObj = { sample: data };
  socket.emit("samplePressed", sampleObj);
}

let currentBar = 0;

function getCurrentBar() {
  return currentBar;
}

socket.on("bar", message => {
  console.log(message + 1);
  currentBar = message + 1;
});

socket.on("phrase", message => {
  console.log(message + 1);
});

export { sendLoopData, sendSampleData, getCurrentBar };
