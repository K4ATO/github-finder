import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
        <main className="container mx-auto px-3 pb-12">Content</main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
