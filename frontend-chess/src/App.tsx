import { useState } from "react";
import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./screens/Landing";
import Game from "./screens/Game";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* 👈 Renders at /app/ */}
          <Route path="/game" element={<Game />} /> {/* 👈 Renders at /app/ */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
