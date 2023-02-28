import React from 'react';
import {Routes, Route} from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PatientPage from "./pages/PatientPage";

function App() {
  return (
    <Routes>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/patient" element={<PatientPage/>}/>
    </Routes>
  );
}

export default App;
