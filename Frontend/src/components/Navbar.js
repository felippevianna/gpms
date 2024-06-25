import React from 'react';
import '../styles/Container.css'; // Importe o arquivo de estilos
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Navbar  = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.clear();
        navigate('/Login');
    }


    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#FBC101' }}>
        <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            98 UFF
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px' }}>
            <Link href="/carona" color="inherit" underline="none">
            Cadastrar Carona
            </Link>
            <Link href="/SolicitarCarona" color="inherit" underline="none">
            Solicitar Carona
            </Link>
            <Link href="/listar-caronas" color="inherit" underline="none">
            Buscar Carona
            </Link>
            <Link href="/Perfil" color="inherit" underline="none">
            Meu Perfil
            </Link>
            <Link onClick={handleLogout} color="inherit" underline="none">
            Sair
            </Link>
        </Box>
        </Toolbar>
        </AppBar>
  );
};

export default Navbar;


