import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";

import Dashboard from "./pages/Dashboard/Dashboard"
import User from "./pages/User/User";
import Error from "./pages/Error/Error"

import "./style/_main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:userId" element={<User />} />
        <Route path="/user/:userId/activity" element={<User />} />
        <Route path="/user/:userId/average-sessions" element={<User />} />
        <Route path="/user/:userId/performance" element={<User />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)