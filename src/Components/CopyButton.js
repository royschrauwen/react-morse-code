import React from "react";

function CopyButton({ translatedMessage }) {
  return (
    <div>
      <button disabled className="btnCopy">
        Copy
      </button>
    </div>
  );
}

export default CopyButton;
