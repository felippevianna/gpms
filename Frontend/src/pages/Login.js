import React, { useState } from 'react';
import Grid from '@mui/joy/Grid';
import Container from '../components/Container';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Link from '@mui/joy/Link';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se ambos os campos estão preenchidos
    if (username.trim() === '' || password.trim() === '') {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Aqui você pode adicionar lógica para enviar os dados do formulário
    console.log('Usuário:', username);
    console.log('Senha:', password);
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

              <Divider />
              <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
                <p>Não tem uma conta?</p>
                <a href="/cadastro">Cadastre-se</a>
              </Box>

            </Stack>
          </form>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
