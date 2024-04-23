import React, { useState } from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Container from '../components/Container';
import Input from '@mui/joy/Input';

const CadastroCarona = () => {
  const [formData, setFormData] = useState({
    carpoolName: '',
    carModel: '',
    licensePlate: '',
    startingPoint: '',
    destination: '',
    seatsAvailable: '',
    cost: '',
    departureTime: '',
    passwordConfirmation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(formData);
  };

  return (
    <Container>
      <Box container spacing={0} sx={{ flexGrow: 0, p: 3, border: '1px ridge grey', borderRadius: 10 }}>
      <form onSubmit={handleSubmit}>
        <p>Nome da carona:</p>
        <Input onChange={handleChange} placeholder="Nome da carona"/>

        <p>Modelo do carro:</p>
        <Input onChange={handleChange} placeholder="Modelo do carro"/>

        <p>Placa:</p>
        <Input onChange={handleChange} placeholder="Placa"/>

        <p>Ponto de partida:</p>
        <Input onChange={handleChange} placeholder="Ponto de partida"/>

        <p>Destino:</p>
        <Input onChange={handleChange} placeholder="Destino"/>

        <p>Quantidade de pessoas:</p>
        <Input type="number" onChange={handleChange} placeholder="Quantidade de pessoas"/>

        <p>Custo (opcional):</p>
        <Input type="number" onChange={handleChange} placeholder="Custo"/>

        <p>Horário de saída:</p>
        <Input type="time" onChange={handleChange} placeholder="Horário de saída"/>

        <Button style={{ marginTop: '20px' }} type="submit">Cadastrar Carona</Button>
      </form>
      </ Box>
    </Container>
  );
};

export default CadastroCarona;
