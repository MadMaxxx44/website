// import { useState } from 'react'

import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Popular from "./components/Popular";
import SignUp from "./components/SignUp";
import Trending from "./components/Trending";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Popular />
      <Trending />
      <SignUp />
    </>
  );
}

export default App;
