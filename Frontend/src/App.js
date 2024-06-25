import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import CadastroCarona from './pages/CadastroCarona';
import ListarCaronas from './pages/ListarCaronas';
import Cadastro from './pages/Cadastro';
import SolicitarCarona from './pages/SolicitarCarona';
import Perfil from './pages/Perfil';
import CadastroVeiculo from './pages/CadastroVeiculo';

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  return !!token; // Returns true if token exists, false otherwise
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route redirects to Login if not authenticated */}
        <Route path="/" element={<Navigate to="/Login" />} />

        {/* Route for Login page */}
        <Route path="/Login" element={<Login />} />

        {/* Protected routes - redirect to Login if not authenticated */}
        <Route
          path="/Home"
          element={isAuthenticated() ? <Home /> : <Navigate to="/Login" />}
        />

        <Route
          path="/Carona"
          element={isAuthenticated() ? <CadastroCarona /> : <Navigate to="/Login" />}
        />

        <Route
          path="/ListarCaronas"
          element={isAuthenticated() ? <ListarCaronas /> : <Navigate to="/Login" />}
        />

        <Route path="/Cadastro" element={<Cadastro />}/>

        <Route
          path="/SolicitarCarona"
          element={isAuthenticated() ? <SolicitarCarona /> : <Navigate to="/Login" />}
        />

        <Route
          path="/Perfil"
          element={isAuthenticated() ? <Perfil /> : <Navigate to="/Login" />}
        />

        <Route
          path="/CadastroVeiculo"
          element={isAuthenticated() ? <CadastroVeiculo /> : <Navigate to="/Login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
