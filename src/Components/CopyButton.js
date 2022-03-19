import React from "react";

function CopyButton({ translatedMessage }) {
  const handleCopyButtonClick = () => {
    navigator.clipboard.writeText(translatedMessage);
  };

  return (
    <div>
      <button onClick={handleCopyButtonClick} className="btnCopy">
        Copy to Clipboard
      </button>
    </div>
  );
}

export default CopyButton;
