const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:8000");

export default function activeIndexMessage(input) {
  ws.on("open", function open() {
    ws.send(input);
  });
}
