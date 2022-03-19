import React, { useState } from "react";

function InputForm() {
  // useStates
  const [rawMessage, setRawMessage] = useState("");
  const [translatedMessage, setTranslatedMessage] = useState("");

  // Morse Code Object
  const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    " ": "  /  ",
  };

  // Functions
  const inputMessage = (event) => {
    setRawMessage(event.target.value);
    translateMessage(event.target.value);
  };

  const translateMessage = (message) => {
    //console.log(message);
    let messageArray = message.split("");
    let translationArray = [];
    messageArray.forEach((element) => {
      console.log(element);
      let charTranslation = morseCode[element.toUpperCase()];
      console.log("Morse: " + charTranslation);
      translationArray.push(charTranslation + " ");
    });
    let translationString = translationArray.join("");
    console.log("Translation: " + translationString);
    setTranslatedMessage(translationString);
  };

  return (
    <div>
      <h1>InputForm</h1>
      <div className="morse-input">
        <textarea defaultValue={rawMessage} onChange={inputMessage}></textarea>
      </div>
      <div className="translated-code">{translatedMessage}</div>
    </div>
  );
}

export default InputForm;
