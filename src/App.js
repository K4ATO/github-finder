import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main>Content</main>
      </div>
    </Router>
  );
};

export default App;
