import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

function sendLoopData(data) {
  socket.emit("btnPressed", data);
}

function sendSampleData(data) {
  let sampleObj = { sample: data };
  socket.emit("btnPressed", sampleObj);
}

export { sendLoopData, sendSampleData };
