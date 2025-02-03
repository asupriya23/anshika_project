import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TextEditor from "./components/TextEditor";
import  HomeScreen  from "./screen/HomeScreen";
import  PlaygroundScreen  from "./screen/PlaygroundScreen"; // Ensure the filename matches

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/playground" element={<PlaygroundScreen />} />
      </Routes>
      <TextEditor />
    </BrowserRouter>
  );
}

export default App;
