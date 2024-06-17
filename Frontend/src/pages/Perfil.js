import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '../components/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Perfil = () => {
  // Dados de exemplo para o perfil do usuário (substituir por dados reais vindo da API)
  const perfilUsuario = {
    nome: 'João da Silva',
    tipoUsuario: 'Motorista',
    reputacao: 4.8,
  };

  // Função para renderizar as estrelas com base na reputação
  const renderStarRating = () => {
    const stars = [];
    const reputacaoInteira = Math.floor(perfilUsuario.reputacao); // Parte inteira da reputação
    const decimal = perfilUsuario.reputacao - reputacaoInteira; // Parte decimal da reputação

    // Inserir estrelas inteiras
    for (let i = 0; i < reputacaoInteira; i++) {
      stars.push(<StarIcon key={i} color="primary" />);
    }

    // Inserir estrela pela metade se houver decimal >= 0.5
    if (decimal >= 0.5) {
      stars.push(<StarIcon key="half" color="primary" />);
    } else if (decimal > 0 && decimal < 0.5) {
      // Inserir estrela vazia se houver decimal > 0 e < 0.5
      stars.push(<StarOutlineIcon key="half" color="primary" />);
    }

    // Preencher até 5 estrelas no total
    while (stars.length < 5) {
      stars.push(<StarOutlineIcon key={stars.length} color="primary" />);
    }

    return stars;
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '30px', // Aumentar o padding para espaçamento interno maior
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Meu Perfil
            </Typography>
            <Typography variant="h6" gutterBottom>
              Nome: {perfilUsuario.nome}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Categoria: {perfilUsuario.tipoUsuario}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Reputação: {renderStarRating()} {/* Renderiza as estrelas */}
            </Typography>
            {/* Espaço para outros detalhes do perfil, como foto, descrição, etc. */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Perfil;
