// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./page/homepage/homepage";
import Summary from "./components/Summery/Summary";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage />} />

          {/* Summary route */}
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
