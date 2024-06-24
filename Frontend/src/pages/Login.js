import React, { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Container from '../components/Container';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Link from '@mui/joy/Link';
import logo from '../styles/98UFF.png';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicialize useNavigate para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password,
      });

      const { token, user } = response.data;
      // Armazene o token e o user no localStorage ou sessionStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      console.log(response.data);

      // Redirecionar para a página de perfil após o login
      navigate('/Perfil'); // Use navigate para redirecionar

    } catch (error) {
      setError('Erro ao fazer login. Verifique suas credenciais.');
      console.error('Erro ao fazer login:', error);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <Box container spacing={1} sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1, p: 2, border: '1px ridge grey', alignItems: 'center', borderRadius: 10 }}>
        <Box sx={{ width: { xs: '90%', sm: '50%', md: '35%' }, textAlign: 'center', border: '3px ridge grey', borderRadius: 10, marginBottom: { xs: '20px', md: 0 }, marginRight: { xs: 0, md: '20px' } }}>
          <img src={logo} alt="Logo" className="login-logo" />
        </Box>
        <Box sx={{ width: { xs: '90%', sm: '50%', md: '55%' }, marginTop: { xs: '20px', md: 0 } }}>
          <Grid container>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <p>Usuário:</p>
                  <Input
                    placeholder="Email"
                    value={username}
                    onChange={handleUsernameChange}
                  />

                  <p>Senha:</p>
                  <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <Button type="submit" disabled={!username || !password}>
                    Entrar
                  </Button>

                  {error && <p style={{ color: 'red' }}>{error}</p>}

                  <Divider />
                  <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                    <p>Não tem uma conta?</p>
                    <Link href="/Cadastro">Cadastre-se</Link>
                  </Box>
                </Stack>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
