import "./App.css";
import React, { useState } from "react";
import InputForm from "./Components/InputForm";
import TranslatedMessage from "./Components/TranslatedMessage";
import CopyButton from "./Components/CopyButton";

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
      <CopyButton translatedMessage={translatedMessage} />
    </div>
  );
}

export default App;
