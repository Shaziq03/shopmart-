import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Products from "./screens/Products";
function RoutesPage() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default RoutesPage;
