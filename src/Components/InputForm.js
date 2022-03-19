import React, { useState } from "react";

function InputForm() {
  // useStates
  const [rawMessage, setRawMessage] = useState("");
  const [translatedMessage, setTranslatedMessage] = useState("");
  const [isAlphanumeric, setIsAlphanumeric] = useState(true);

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
    " ": "/",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    ":": "---...",
    "'": ".----.",
    ")": "-.--.-",
    ";": "-.-.-",
    "(": "-.--.",
    "=": "-...-",
    "@": ".--.-.",
    "&": ".-...",
    "\n": " / ",
  };

  // Functions
  const inputMessage = (event) => {
    setRawMessage(event.target.value);
    translateMessage(event.target.value);
  };

  function containsAnyLetter(str) {
    return /[a-zA-Z0-9]/.test(str);
  }

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  const translateMessage = (message) => {
    if (message !== "" && !containsAnyLetter(message)) {
      // console.log("Input is waarschijnlijk morse code!");
      setIsAlphanumeric(false);
    } else {
      setIsAlphanumeric(true);
    }

    let translationString = "";
    let translationArray = [];

    if (isAlphanumeric) {
      let messageArray = message.split("");
      messageArray.forEach((element) => {
        let charTranslation = morseCode[element.toUpperCase()];
        translationArray.push(charTranslation + " ");
      });
      translationString = translationArray.join("");
    } else {
      if (rawMessage !== "") {
        let translatedLetters = [];
        let messageLetterArray = [];

        let messageWordsArray = message.split("/");

        console.log("message: " + message);
        console.log("messageWordsArray: " + messageWordsArray);

        messageWordsArray.forEach((element) => {
          messageLetterArray = element.split(" ");
          messageLetterArray.forEach((elementLetter) => {
            let letter = getKeyByValue(morseCode, elementLetter);
            translatedLetters.push(letter);
          });
          translatedLetters.push(" ");
        });
        translationString = translatedLetters.join("").toLowerCase();
        translationString =
          translationString.charAt(0).toUpperCase() +
          translationString.slice(1);
      }
    }

    setTranslatedMessage(translationString);
  };

  return (
    <div>
      <h1>Morse Code Translator</h1>
      <div>
        <h2>Input Message</h2>
        <div className="morse-input">
          <textarea
            defaultValue={rawMessage}
            onChange={inputMessage}
          ></textarea>
        </div>
        <div className="translated-code">{translatedMessage}</div>
      </div>
      <button disabled className="btnCopy">
        Copy
      </button>
    </div>
  );
}

export default InputForm;
