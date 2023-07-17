// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Menu from "./pages/Menu.tsx";
// import AboutUs from "./pages/AboutUs.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  offset: 100,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/about-us" element={<AboutUs />} /> */}
    </Routes>
  </BrowserRouter>
);
