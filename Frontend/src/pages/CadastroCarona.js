import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Container from '../components/Container';
import Input from '@mui/joy/Input';

const CadastroCarona = () => {
  const [formData, setFormData] = useState({
    motoristaId: '', // Atributo correspondente ao motorista_id
    origem: '',
    destino: '',
    dataHoraPartida: '',
    dataHoraChegada: '',
    vagasDisponiveis: '',
    aceiteAutomatico: true, // Valor padrão
    status: 'Ativo', // Valor padrão
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
      const response = await axios.post('http://localhost:8080/api/rides', formData);
      console.log('Ride cadastrado:', response.data);
      // Lógica adicional após cadastrar o ride, como redirecionar ou limpar o formulário
    } catch (error) {
      console.error('Erro ao cadastrar o ride:', error);
    }
  };

  return (
    <Container>
      <Box container spacing={0} sx={{ flexGrow: 0, p: 3, border: '1px ridge grey', borderRadius: 10 }}>
        <form onSubmit={handleSubmit}>
          <p>Motorista ID:</p>
          <Input name="motoristaId" onChange={handleChange} placeholder="ID do Motorista" />

          <p>Origem:</p>
          <Input name="origem" onChange={handleChange} placeholder="Origem" />

          <p>Destino:</p>
          <Input name="destino" onChange={handleChange} placeholder="Destino" />

          <p>Data e Hora de Partida:</p>
          <Input type="datetime-local" name="dataHoraPartida" onChange={handleChange} />

          <p>Data e Hora de Chegada:</p>
          <Input type="datetime-local" name="dataHoraChegada" onChange={handleChange} />

          <p>Vagas Disponíveis:</p>
          <Input type="number" name="vagasDisponiveis" onChange={handleChange} placeholder="Quantidade de vagas disponíveis" />

          <Button style={{ marginTop: '20px' }} type="submit">Cadastrar Ride</Button>
        </form>
      </Box>
    </Container>
  );
};

export default CadastroCarona;
