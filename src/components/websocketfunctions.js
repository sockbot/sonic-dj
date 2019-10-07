import openSocket from "socket.io-client";
const socket = openSocket("http://localhost:8000");

function sendLoopData(data) {
  socket.emit("btnPressed", data);
}

export { sendLoopData };
