import React from "react";

function CopyButton({ translatedMessage }) {
  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(translatedMessage);
    copyToClipboard(translatedMessage);
  };

  function copyToClipboard(data) {
    var tempItem = document.createElement("input");
    tempItem.setAttribute("type", "text");
    tempItem.setAttribute("display", "none");
    let content = data;
    if (data instanceof HTMLElement) {
      content = data.innerHTML;
    }
    tempItem.setAttribute("value", content);
    document.body.appendChild(tempItem);
    tempItem.select();
    document.execCommand("Copy");
    tempItem.parentElement.removeChild(tempItem);
  }

  return (
    <div>
      <button onClick={handleCopyButtonClick} className="btnCopy">
        Copy to Clipboard
      </button>
    </div>
  );
}

export default CopyButton;
