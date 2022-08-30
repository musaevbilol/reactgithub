import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PURCHASE from "./pages/purchase";
import Home from "./pages/home";
import VEHICLES from "./pages/vehicles";
import Owners from "./pages/owners";
import Explore from "./pages/explore";
import JaguarDetail from "./pages/JaguarDetail";
import LoginPage from "./pages/login";
import AuthProvider from "./pages/login/logout";
import JaguarUpdate from "./pages/JaguarUpdate";
import JaguarCreate from "./pages/JaguarCreate";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<VEHICLES />} />
        <Route path="/purchase" element={<PURCHASE />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/jaguar/:id" element={<JaguarDetail />} />
        <Route path="/jaguar/update/:id" element={<JaguarUpdate />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jaguar/create" element={<JaguarCreate/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
