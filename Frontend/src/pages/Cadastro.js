import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '../components/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import Stack from '@mui/joy/Stack';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate para redirecionamento

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    reputacao: '5.0',
  });
  const navigate = useNavigate(); // Inicialize useNavigate para navegação

  const isFormValid = () => {
    return formData.nome && formData.email && formData.senha && formData.telefone;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataAtual = new Date().toISOString().split('T')[0];

    const usuarioData = {
      ...formData,
      dataCadastro: dataAtual,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/users', usuarioData);
      console.log(response.data);

      navigate('/Login'); // Use navigate para redirecionar
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      // Precisamos implementar o tratamentos dos erros ainda.
    }
  };

  const handleBack = () => {
    navigate('/Login'); // Altere '/previous-path' para o caminho desejado
  };

  return (
    <Container>
      <Box sx={{ flexGrow: 1, p: 5, border: '1px ridge grey', borderRadius: 10 }}>
        <h2 style={{ textAlign: 'center'}}>Cadastro</h2>
        <Grid xs={6} md={12}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                id="nome"
                name="nome"
                label="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                id="email"
                name="email"
                type="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                id="senha"
                name="senha"
                type="password"
                label="Senha"
                value={formData.senha}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                id="telefone"
                name="telefone"
                label="Telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isFormValid()}
              >
                Confirmar Cadastro
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleBack}
              >
                Voltar
              </Button>
            </Stack>
          </form>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cadastro;
