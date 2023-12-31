import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/Login";
import ParentPage from "./components/ParentPage";
import ChildPage from "./components/ChildPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/parent" element={<ParentPage />} />
        <Route path="/child" element={<ChildPage />} />
        {/* Add more routes for other components */}
      </Routes>
    </Router>
  );
}

export default App;
