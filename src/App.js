import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleSave = () => {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial' }}>
      <h1>Simple Text Editor</h1>
      <textarea
        style={{
          width: '80%',
          height: '300px',
          margin: '10px 0',
          fontSize: '16px',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
        placeholder="Type your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}

export default App;

