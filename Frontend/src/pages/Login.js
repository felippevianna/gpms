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
import logo from '../styles/98UFF.png'; // Certifique-se de que o caminho está correto
import { useNavigate } from 'react-router-dom'; // Importe useNavigate para redirecionamento

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Inicialize useNavigate para navegação

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username);
    console.log(password);
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password,
      });

      const { token, userId, userName } = response.data;
      // Armazene o token e o userId (ID do usuário) no localStorage ou sessionStorage
      localStorage.setItem('token', token);
      localStorage.setItem('userId', userId);

      console.log('Login successful! Token:', token, 'UserID:', userId);

      // Redirecionar para a página de perfil após o login
      navigate('/perfil'); // Use navigate para redirecionar

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
      <Box container spacing={1} sx={{ flexGrow: 1, p: 5, border: '1px ridge grey', borderRadius: 10 }}>
        <div style={{ display: 'grid', placeItems: 'center', height: '10vh' }}>
          <img src={logo} alt="Logo" style={{ width: '120px', marginBottom: '30px' }} />
        </div>
        <h2>Login</h2>

        <Grid xs={6} md={12}>
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

              <Button type="submit" disabled={!username || !password}>Entrar</Button>

              {error && <p style={{ color: 'red' }}>{error}</p>}

              <Divider />
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                <p>Não tem uma conta?</p>
                <Link href="/cadastro">Cadastre-se</Link>
              </Box>

            </Stack>
          </form>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
