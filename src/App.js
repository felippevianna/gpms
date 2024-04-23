import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import CadastroCarona from './pages/CadastroCarona';
import ListarCaronas from './pages/ListarCaronas';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/carona" element={<CadastroCarona />} />
          <Route path="/listar-caronas" element={<ListarCaronas />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
