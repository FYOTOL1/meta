import React from "react";
import Top_Picks from "./components/top_picks/Top_Picks.jsx";
import Category from "./components/category/Category.jsx";
import Header from "./components/header/Header";
import Slider from "./components/Slider";
import "./App.css";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Slider />
      <Category />
      <Top_Picks />
      <Footer />
    </div>
  );
}

export default App;
