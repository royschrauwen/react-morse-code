import logo from "./logo.svg";
import "./App.css";
import InputForm from "./Components/InputForm";
import TranslatedMessage from "./Components/TranslatedMessage";
import React, { useState } from "react";

function App() {
  const [translatedMessage, setTranslatedMessage] = useState("");

  return (
    <div className="App">
      <h1>Morse Code Translator</h1>
      <InputForm
        translatedMessage={translatedMessage}
        setTranslatedMessage={setTranslatedMessage}
      />
      <TranslatedMessage translatedMessage={translatedMessage} />
    </div>
  );
}

export default App;
