import React, { useState } from 'react';
import { Container, Box, Input, Button, Card, CardContent, Typography, IconButton, Modal } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ListarCaronas = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selectedRide, setSelectedRide] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // try {
        //     const Userid = localStorage.getItem('userId')
        //     const response = await axios.get(`http://localhost:8080/api/rides/user/`+ Userid);
        //     console.log(response.data);
        //     setSearchResults(response.data);
        // } catch (error) {
        //     console.error('Erro ao buscar caronas:', error);
        //       setSearchResults([]); // Limpar os resultados em caso de erro
        // }
    };

    const handleViewRide = (ride) => {
        setSelectedRide(ride);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Navbar/>

            <Container>
                <Box container spacing={0} sx={{ flexGrow: 0, p: 3, border: '1px ridge grey', borderRadius: 10, marginTop: 20 }}>
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
                    {searchResults.map((ride) => (
                        <Card key={ride.id} style={{ marginBottom: '20px' }}>
                            <CardContent>
                                <IconButton
                                    edge="end"
                                    color="primary"
                                    onClick={() => handleViewRide(ride)}
                                    style={{ marginLeft: 'auto' }}
                                >
                                    <VisibilityIcon />
                                </IconButton>
                                <Typography variant="h6" component="div">
                                    {ride.destino}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Nome do motorista: {ride.motorista ? ride.motorista.nome : '' }
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Assentos disponíveis: {ride.vagasDisponiveis}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Horário de partida: {ride.dataHoraPartida}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                {/* Modal para exibir detalhes da carona */}
                <Modal
                    open={openModal}
                    onClose={handleCloseModal}
                    aria-labelledby="ride-details-modal"
                >
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', border: '1px ridge grey', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 2 }}>
                        <Typography variant="h6" component="div" gutterBottom>
                            Detalhes da Carona
                        </Typography>
                        {selectedRide && (
                            <>
                                <Typography variant="body2" gutterBottom>
                                    Destino: {selectedRide.destination}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Nome do motorista: {selectedRide.motorista.nome}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Modelo do carro: {selectedRide.carModel}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Assentos disponíveis: {selectedRide.vagasDisponiveis}
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                    Horário de partida: {selectedRide.dataHoraPartida}
                                </Typography>
                            </>
                        )}
                    </Box>
                </Modal>
            </Container>
        </Box>
    );
};

export default ListarCaronas;
