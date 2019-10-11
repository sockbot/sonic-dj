# Sonic DJ

Sonic DJ is a is a casual DJ experience for DJs without experience.

## How it works

Sonic DJ is a user-friendly interface for Sonic Pi, a programmable synthesizer. People new to being a DJ can use Sonic DJ to create EDM music in a structured and interactive way without having any musical training. Beat matching, selecting samples, loop timing, and song structure are all programmed into Sonic Pi, enabling users to immediately start creating structured music from unstructured sounds.

Sonic DJ's UI is built using React on the front end. Communication with Sonic Pi is bridged with socket.io and osc-js on the back end using the Open Sound Control protocol.

Lead, bass, drum and rise loops are programmed in Ruby and interpreted in Sonic Pi. The Sonic Pi emits a heartbeat and musical phrasing markers which are captured and interpreted by the Sonic DJ bridging server. The Sonic DJ UI sends the commands to the Sonic DJ bridging server containing the sounds the user wants to play. At the appropriate timing and trigger points, the Sonic DJ bridging server sends commands back to the Sonic Pi which plays the sounds.

## How to Use

An EDM song is made up of a melody (Break A and Break B), a rise (Buildup A and Buildup B), and a melodic hook (Drop A and Drop B).

You can select one loop from each of the Lead, Bass, Drum, and Rise columns. The loop will not play until the next phrase is ready to be played. Each phrase is made up of 8 bars, which you can see in the bar counter above the loop selection grid. An exception is the phrase before the drop, which has an extra bar of silence for added tension.

The sounds you select will not play until the next phrase, where they will all start playing together in sync.

The quickset functions are in development and currently not functional.

## Technologies and Frameworks

### Front End

- React
- HTML/CSS
- SASS
- Storybook

### Back End

- Node
- socket.io
- Sonic Pi
- osc-js

### Languages

- Javascript
- Ruby

## Setup

### Dependencies

1. Install dependencies with `npm install`.
2. Install the Sonic DJ server from: https://github.com/sockbot/sonic-dj-ws-osc and install its dependencies by running `npm install`
3. Install Sonic Pi 3.x and above from sonic-pi.net
4. Install sonic-pi-tool from https://github.com/lpil/sonic-pi-tool

### Start the software

1. Start the sonic-dj project by running `npm start`
2. Start the sonic-dj-ws-osc project by running `npm start`
3. Start Sonic Pi. Enable the OSC server in Prefs > IO > Enable OSC server.
4. Run the Sonic Pi script from the sonic-dj-ws-osc project folder by running `npm run sonic-pi-start`
5. The Sonic DJ interface is available at http://localhost:3000

## Screenshots

![Sonic DJ](https://github.com/sockbot/sonic-dj/blob/master/docs/sonic-dj-ui.png)
![Sonic Pi](https://github.com/sockbot/sonic-dj/blob/master/docs/sonic-pi-ui.png)
