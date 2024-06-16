import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '../components/Container';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    telefone: '',
    tipo: '', // Esta será a opção selecionada: 'passageiro' ou 'motorista'
    marca: '', // Campos adicionais para motorista
    modelo: '',
    placa: '',
    cor: '',
    ano: '',
  });

  const [isMotorista, setIsMotorista] = useState(false); // Estado para controlar se é motorista

  const isFormValid = () => {
    if (!formData.nome || !formData.email || !formData.senha || !formData.telefone) {
      return false;
    }
    if (isMotorista && (!formData.marca || !formData.modelo || !formData.placa || !formData.cor || !formData.ano)) {
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'tipo') {
      setIsMotorista(value === 'motorista');
      // Reset dos campos do carro quando mudar de tipo para passageiro
      if (value === 'passageiro') {
        setFormData((prevData) => ({
          ...prevData,
          marca: '',
          modelo: '',
          placa: '',
          cor: '',
          ano: '',
        }));
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    //  enviar os dados para a API
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
              <FormControl component="fieldset" margin="normal">
                <FormLabel component="legend">Tipo de Cadastro</FormLabel>
                <RadioGroup
                  aria-label="tipo"
                  name="tipo"
                  value={formData.tipo}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel
                    value="passageiro"
                    control={<Radio />}
                    label="Passageiro"
                  />
                  <FormControlLabel
                    value="motorista"
                    control={<Radio />}
                    label="Motorista"
                  />
                </RadioGroup>
              </FormControl>

              {isMotorista && (
                <>
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    id="marca"
                    name="marca"
                    label="Marca"
                    value={formData.marca}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    id="modelo"
                    name="modelo"
                    label="Modelo"
                    value={formData.modelo}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    id="placa"
                    name="placa"
                    label="Placa"
                    value={formData.placa}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    id="cor"
                    name="cor"
                    label="Cor"
                    value={formData.cor}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    id="ano"
                    name="ano"
                    label="Ano"
                    value={formData.ano}
                    onChange={handleChange}
                    required
                  />
                </>
              )}

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
