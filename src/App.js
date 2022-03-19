import "./App.css";
import React, { useState } from "react";
import InputForm from "./Components/InputForm";
import TranslatedMessage from "./Components/TranslatedMessage";
import CopyButton from "./Components/CopyButton";
import AudioPlayer from "./Components/AudioPlayer";

function App() {
  const [translatedMessage, setTranslatedMessage] = useState("");
  const [messageIsMorseCode, setMessageIsMorseCode] = useState(false);
  const [messageAsArray, setMessageAsArray] = useState([]);

  let audioPlayer;
  if (
    messageIsMorseCode &&
    translatedMessage !== "" &&
    translatedMessage !== " "
  ) {
    audioPlayer = <AudioPlayer messageAsArray={messageAsArray} />;
  } else {
    audioPlayer = "";
  }

  return (
    <div className="App">
      <h1 className="header">Morse Code Translator</h1>
      <InputForm
        translatedMessage={translatedMessage}
        setTranslatedMessage={setTranslatedMessage}
        setMessageIsMorseCode={setMessageIsMorseCode}
        messageAsArray={messageAsArray}
        setMessageAsArray={setMessageAsArray}
      />
      <TranslatedMessage translatedMessage={translatedMessage} />
      <CopyButton translatedMessage={translatedMessage} />
      {audioPlayer}
    </div>
  );
}

export default App;
