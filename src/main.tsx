// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Router>
    <Routes>
      <Route path="/menu" element={<Menu />} />
    </Routes>
    <App />
  </Router>
);
