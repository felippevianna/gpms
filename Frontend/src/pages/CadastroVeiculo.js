import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Container from '../components/Container';
import Input from '@mui/joy/Input';
import Navbar from '../components/Navbar';

const CadastroVeiculo = () => {
  const [formData, setFormData] = useState({
    usuarioId: '', // Atributo correspondente ao usuario_id
    marca: '',
    modelo: '',
    placa: '',
    cor: '',
    ano: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/veiculos', formData);
      console.log('Veículo cadastrado:', response.data);
      // Lógica adicional após cadastrar o veículo, como redirecionar ou limpar o formulário
    } catch (error) {
      console.error('Erro ao cadastrar o veículo:', error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Container>
        <Box container spacing={0} sx={{ flexGrow: 0, p: 3, border: '1px ridge grey', borderRadius: 10 }}>
          <form onSubmit={handleSubmit}>
            <p>Usuário ID:</p>
            <Input name="usuarioId" onChange={handleChange} placeholder="ID do Usuário" />

            <p>Marca:</p>
            <Input name="marca" onChange={handleChange} placeholder="Marca do Veículo" />

            <p>Modelo:</p>
            <Input name="modelo" onChange={handleChange} placeholder="Modelo do Veículo" />

            <p>Placa:</p>
            <Input name="placa" onChange={handleChange} placeholder="Placa do Veículo" />

            <p>Cor:</p>
            <Input name="cor" onChange={handleChange} placeholder="Cor do Veículo" />

            <p>Ano:</p>
            <Input type="number" name="ano" onChange={handleChange} placeholder="Ano de Fabricação" />

            <Button style={{ marginTop: '20px' }} type="submit">Cadastrar Veículo</Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default CadastroVeiculo;
