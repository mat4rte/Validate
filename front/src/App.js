// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index.js";
import Tasks from "./pages/Tasks/index.js";
import Nav from "./components/ui/Nav/nav.js";

function App() {
  return (
    <>
      <Nav />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<h1>Tasks</h1>} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
