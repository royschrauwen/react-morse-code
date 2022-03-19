function InputForm({ translatedMessage }) {
  return (
    <div>
      <div className="translated-code">{translatedMessage}</div>

      <button disabled className="btnCopy">
        Copy
      </button>
    </div>
  );
}

export default InputForm;
