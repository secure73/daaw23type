import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";


const Router: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
};

export default Router;
