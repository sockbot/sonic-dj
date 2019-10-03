const SONIC_PI_PORT = 4559;
const SONIC_PI_HOST = "localhost";

const OSC = require("osc-js");

const config = {
  send: {
    host: SONIC_PI_HOST, // @param {string} Hostname of udp client for messaging
    port: SONIC_PI_PORT // @param {number} Port of udp client for messaging
  }
};

const plugin = new OSC.DatagramPlugin(config);

const osc = new OSC({
  plugin: plugin
});

osc.open();

const playLoop = options => {
  const { control, value } = options;
  message = new OSC.Message(control, value);
  osc.send(message);
};

const playPhrase = loops => {
  for (const loop of loops) {
    playLoop(loop);
  }
};

const intro = [
  { control: "/1/push1", value: 1 },
  { control: "/1/push2", value: 1 },
  { control: "/1/push3", value: 1 }
];

playPhrase(intro);

// playLoop({ control: "/1/push1", value: 1 });

// setTimeout(() => {
//   playLoop({ control: "/1/push1", value: 0 });
//   console.log("End loop");
// }, 3000);

// intro 8 bars
// lowBreak (verse) 8 bars
// highBreak 8 bars
// buildup 8 bars
// dropA 8 bars
// dropB 8 bars
// lowBreak 8 bars
// highBreak 8 bars
// buildup 8 bars
// dropA 8 bars
// dropB 8 bars
// outro 8 bars

class Song {
  constructor(intro, lowBreak, highBreak, buildup, dropA, dropB, outro) {}
  playPhrase(phrase) {}
}

module.exports = Song;
