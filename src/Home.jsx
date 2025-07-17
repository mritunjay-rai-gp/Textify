import React, { useState } from 'react';

export default function Home(props) {
  const [text, setText] = useState("");

  function handleOnChange(event) {
    setText(event.target.value);
  }

  const UPconversion = () => {
      if (text.trim() === "") {
    props.showAlert("Enter some text first", "danger");
    return;
  }
    setText(text.toUpperCase());
    props.showAlert("Converted to Upper case", "success");
  };

  const loconversion = () => {
      if (text.trim() === "") {
    props.showAlert("Enter some text first", "danger");
    return;
  }
    setText(text.toLowerCase());
    props.showAlert("Converted to Lower case", "success");
  };

  const clrconversion = () => {
      if (text.trim() === "") {
    props.showAlert("Nothing to clear", "danger");
    return;
  }
    setText("");
    props.showAlert("Cleared", "success");
  };

  const copyconversion = () => {
      if (text.trim() === "") {
    props.showAlert("Nothing to copy", "danger");
    return;
  }
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success");
  };

  const removeSpaces = () => {
      if (text.trim() === "") {
    props.showAlert("Nothing to format", "danger");
    return;
  }
    setText(text.replace(/\s+/g, ' ').trim());
    props.showAlert("Extra spaces removed", "success");
  };

  const capitalizeWords = () => {
      if (text.trim() === "") {
    props.showAlert("Enter some text first", "danger");
    return;
  }
    const newText = text
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Capitalized first letter of each word", "success");
  };

  const downloadTxt = () => {
      if (text.trim() === "") {
    props.showAlert("Nothing to download", "danger");
    return;
  }
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "textutils-output.txt";
    link.href = url;
    link.click();
    props.showAlert("Text file downloaded", "success");
  };

  return (
    <div className="container">
      <h3 className="my-3 mt-5" style={{ color: "red" }}>Enter Text</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          style={{ backgroundColor: "#f5f5f5", border: "3px solid red" }}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <p className="my-4" style={{ color: "red" }}>
        Words: {text.trim() ? text.trim().split(/\s+/).length : 0} &nbsp;|&nbsp; 
        Characters: {text.length} &nbsp;|&nbsp;
        Reading Time: {(0.008 * text.split(" ").filter(w => w).length).toFixed(2)} minutes
      </p>

      <button className="btn btn-danger my-1" onClick={UPconversion}>Uppercase</button>
      <button className="btn btn-danger mx-2 my-1" onClick={loconversion}>Lowercase</button>
      <button className="btn btn-danger mx-2 my-1" onClick={capitalizeWords}>Capitalize Words</button>
      <button className="btn btn-danger mx-2 my-1" onClick={removeSpaces}>Remove Spaces</button>
      <button className="btn btn-danger mx-2 my-1" onClick={clrconversion}>Clear</button>
      <button className="btn btn-danger mx-2 my-1" onClick={copyconversion}>Copy</button>
      <button className="btn btn-danger mx-2 my-1" onClick={downloadTxt}>Download</button>

      <h4 className="mt-5" style={{color:"red"}}>Live Preview</h4>
      <div className="p-3" style={{ border: "2px solid red", backgroundColor: "#f5f5f5" }}>
        {text.length > 0 ? text : <i>Nothing to preview...</i>}
      </div>
    </div>
  );
}
