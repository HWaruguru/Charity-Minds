import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Index } from "./pages/Index";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import "./index.css";
import { HomeLayout } from "./pages/HomeLayout.jsx";
import { Users } from "./pages/Users.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<HomeLayout/>}>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<Users/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
