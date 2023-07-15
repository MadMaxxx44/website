// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Menu from "./pages/Menu.tsx";
// import AboutUs from "./pages/AboutUs.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/about-us" element={<AboutUs />} /> */}
    </Routes>
  </BrowserRouter>
);
