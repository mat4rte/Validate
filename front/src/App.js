// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index.js";
import Tasks from "./pages/Tasks/tasks.js";
import Nav from "./components/ui/Nav/nav.js";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="body">
        <div className="content mt-8">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/login" element={<Login />} />
              <Route path="/tasks" element={<Tasks />} />
              {/* <Route path="/Habits" element={<Habits />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
