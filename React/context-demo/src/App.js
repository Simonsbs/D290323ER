import { useState } from "react";
import "./App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <h1>My App</h1>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
