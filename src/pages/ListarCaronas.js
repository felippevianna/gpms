import React, { useState } from 'react';
import { Container, Box, Input, Button, Card, CardContent, Typography, IconButton, Modal } from '@mui/joy';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ListarCaronas = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCarpool, setSelectedCarpool] = useState(null);
    const [openModal, setOpenModal] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para buscar as caronas pelo destino
    // Atualmente, estamos apenas definindo um resultado de exemplo
    setSearchResults([
      {
        id: 1,
        destination: 'Botafogo, Rio de Janeiro',
        carpoolName: 'João Silva',
        carModel: 'Sedan',
        seatsAvailable: 3,
        departureTime: '14:00',
        date: '25/04/2024',
      },
      {
        id: 2,
        destination: 'Tijuca, Rio de Janeiro',
        carpoolName: 'Maria Souza',
        carModel: 'Hatch',
        seatsAvailable: 2,
        departureTime: '08:30',
        date: '26/04/2024',
      },
    ]);
  };

  const handleViewCarpool = (carpool) => {
    setSelectedCarpool(carpool);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container>
        <Box container spacing={0} sx={{ flexGrow: 0, p: 3, border: '1px ridge grey', borderRadius: 10, marginTop: 2 }}>
        <form onSubmit={handleSubmit}>
            <p>Buscar carona por destino:</p>
            <Input
            fullWidth
            onChange={handleChange}
            placeholder="Digite o destino"
            value={searchTerm}
            />
            <Button style={{ marginTop: '20px' }} type="submit">Buscar</Button>
        </form>
        </Box>

        <Box container spacing={0} sx={{ flexGrow: 0, p: 3, border: '1px ridge grey', borderRadius: 10, marginTop: 2 }}>
        {searchResults.map((result) => (
            <Card key={result.id} style={{ marginBottom: '20px' }}>
            <CardContent>
                <IconButton
                    edge="end"
                    color="primary"
                    onClick={() => handleViewCarpool(result)}
                    style={{ marginLeft: 'auto' }}
                >
                    <VisibilityIcon />
                </IconButton>
                <Typography variant="h6" component="div">
                    {result.destination}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Nome da carona: {result.carpoolName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Modelo do carro: {result.carModel}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Assentos disponíveis: {result.seatsAvailable}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Horário de partida: {result.departureTime}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Data: {result.date}
                </Typography>
            </CardContent>
            </Card>
        ))}
        </Box>

        
        {/* Modal para exibir detalhes da carona */}
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="carpool-details-modal"
        >
            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',border: '1px ridge grey',  width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
                Detalhes da Carona
            </Typography>
            {selectedCarpool && (
                <>
                <Typography variant="body2" gutterBottom>
                    Destino: {selectedCarpool.destination}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Nome da carona: {selectedCarpool.carpoolName}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Modelo do carro: {selectedCarpool.carModel}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Assentos disponíveis: {selectedCarpool.seatsAvailable}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Horário de partida: {selectedCarpool.departureTime}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Data: {selectedCarpool.date}
                </Typography>
                </>
            )}
            </Box>
        </Modal>  
          

    </Container>
  );
};

export default ListarCaronas;
