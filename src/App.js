import React, { useState } from 'react';

function App() {
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
      <h1 style={styles.heading}>Online Text Editor</h1>
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        cols="50"
        placeholder="Start typing here..."
        style={styles.textArea}
      ></textarea>
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
}

const styles = {
  container: {
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#f4f4f9",
    borderRadius: "8px",
    width: "80%",
    margin: "50px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    color: "#333",
    fontSize: "2.5rem",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  textArea: {
    width: "80%",
    height: "250px",
    padding: "15px",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
    resize: "none",
    fontFamily: "'Courier New', monospace",
    transition: "border-color 0.3s",
  },
  textAreaFocus: {
    borderColor: "#007BFF",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  saveButton: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  clearButton: {
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default App;
