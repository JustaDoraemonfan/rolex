import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar"; // Optional Navbar component
import Watches2024 from "./Components/Watches2024";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/watch2024" element={<Watches2024/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
