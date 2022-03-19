import React from "react";

export async function copyTextToClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

function CopyButton({ translatedMessage }) {
  return (
    <div>
      <button
        onClick={copyTextToClipboard(translatedMessage)}
        className="btnCopy"
      >
        Copy
      </button>
    </div>
  );
}

export default CopyButton;
