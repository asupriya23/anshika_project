import React, { useState } from "react";

const TextEditor = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    
  };

  const handleSave = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "editor.txt";
    link.click();
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Simple Text Editor</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing here..."
        style={styles.textArea}
      />
      <div style={styles.buttonContainer}>
        <button onClick={handleSave} style={styles.saveButton}>
          Save
        </button>
        <button onClick={handleClear} style={styles.clearButton}>
          Clear
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    maxWidth: "600px",
    margin: "40px auto",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    color: "#333",
  },
  textArea: {
    width: "100%",
    height: "200px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    resize: "none",
  },
  buttonContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  saveButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  clearButton: {
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default TextEditor;
