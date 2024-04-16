import React from "react";
import Pizza from "./components/Pizza.jsx";
import Header from "./components/Header.jsx";
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx";
import pizzaData from "./data.js";
import "./index.css";

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
