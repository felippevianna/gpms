import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '../components/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'; // Importar axios

const Perfil = () => {
  const [perfilUsuario, setPerfilUsuario] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Função para buscar os dados do usuário
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const response = await axios.get('http://localhost:8080/api/users/' + userId);

        // const response = await axios.get('http://localhost:8080/api/users/' + userId, {
        //   headers: {
        //     'Authorization': `Bearer ${token}`
        //   }
        // });
        setPerfilUsuario(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerfilUsuario((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`http://localhost:8080/api/users/${perfilUsuario.id}`, perfilUsuario);
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao salvar dados do usuário:', error);
    }
  };

  // Função para renderizar as estrelas com base na reputação
  const renderStarRating = (reputacao) => {
    const stars = [];
    const reputacaoInteira = Math.floor(reputacao); // Parte inteira da reputação
    const decimal = reputacao - reputacaoInteira; // Parte decimal da reputação

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

  if (!perfilUsuario) {
    return (
      <Container>
        <Typography variant="h6" align="center">
          Carregando...
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '30px',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Meu Perfil
            </Typography>
            {isEditing ? (
              <>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="nome"
                  name="nome"
                  label="Nome"
                  value={perfilUsuario.nome}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="email"
                  name="email"
                  label="Email"
                  value={perfilUsuario.email}
                  onChange={handleInputChange}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="telefone"
                  name="telefone"
                  label="Telefone"
                  value={perfilUsuario.telefone}
                  onChange={handleInputChange}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSaveChanges}
                  sx={{ mt: 2 }}
                >
                  Salvar
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setIsEditing(false)}
                  sx={{ mt: 2, ml: 2 }}
                >
                  Cancelar
                </Button>
              </>
            ) : (
              <>
                <Typography variant="h6" gutterBottom>
                  Nome: {perfilUsuario.nome}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Email: {perfilUsuario.email}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Telefone: {perfilUsuario.telefone}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Categoria: {perfilUsuario.tipoUsuario}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Reputação: {renderStarRating(perfilUsuario.reputacao)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setIsEditing(true)}
                  sx={{ mt: 2 }}
                >
                  Editar Perfil
                </Button>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Perfil;
