import React from "react";
import audioShort from "../Audio/dot.wav";
import audioLong from "../Audio/dash.wav";
import audioSpace from "../Audio/blank_3unit.wav";
import audioNextLetter from "../Audio/blank_7unit.wav";

let playlist = [];

function convertMessageToAudioFiles(array) {
  playlist = [];
  //   console.log("array: " + array);
  let messageSplit = array.split("");
  messageSplit.forEach((element) => {
    // console.log("element: " + element);
    switch (element) {
      case ".":
        playlist.push(audioShort);
        break;
      case "-":
        playlist.push(audioLong);
        break;
      case " ":
        playlist.push(audioNextLetter);
        break;
      case "/":
        playlist.push(audioSpace);
        break;
      default:
        break;
    }
  });
}

function AudioPlayer({ messageAsArray }) {
  //   console.log(messageAsArray);

  //   console.log("messageAsArray: " + messageAsArray);

  //   let playlist = [audioShort, audioLong, audioShort, audioShort, audioLong];
  //   console.log("playlist: " + playlist);

  const playSoundFile = () => {
    convertMessageToAudioFiles(messageAsArray.trim());

    let audioSource = new Audio();
    audioSource.src = playlist[0];
    let playlistIndex = 1;
    audioSource.volume = 0.3;
    audioSource.loop = false;

    audioSource.addEventListener(
      "ended",
      function () {
        //playlistIndex = ++playlistIndex < playlist.length ? playlistIndex : 0;
        // console.log("playlistIndex: " + playlistIndex);
        // console.log("playlistFile: " + playlist[playlistIndex]);
        audioSource.src = playlist[playlistIndex];
        if (playlistIndex < playlist.length) {
          audioSource.play();
          playlistIndex++;
        }
      },
      true
    );
    audioSource.volume = 0.3;
    audioSource.loop = false;
    audioSource.play();
  };
  return (
    <div>
      <button onClick={playSoundFile} className="btnCopy">
        Play Audio
      </button>
    </div>
  );
}

export default AudioPlayer;
