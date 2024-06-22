import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '../components/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
  });

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
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      // Precisamos implementar o tratamentos dos erros ainda.
    }
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <form onSubmit={handleSubmit}>
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
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cadastro;
