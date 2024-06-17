import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '../components/Container';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

const SolicitarCarona = () => {
  const [formData, setFormData] = useState({
    pontoPartida: '',
    destino: '',
    dia: '',
    horario: '',
    embarqueImediato: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(formData);
    // Por exemplo, você pode enviar os dados para uma API ou realizar outra ação com os dados
  };

  // Sugestões de pontos de partida (pode ser alterado conforme necessário)
  const sugestoesPontosPartida = [
    { label: 'UFF - Campus Praia Vermelha' },
    { label: 'UFF - Campus Gragoatá' },
    { label: 'Plaza Shopping' },
  ];

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
              <Stack spacing={2}>
                <Autocomplete
                  id="pontoPartida"
                  name="pontoPartida"
                  options={sugestoesPontosPartida}
                  getOptionLabel={(option) => option.label}
                  onChange={(e, value) =>
                    handleChange({
                      target: { name: 'pontoPartida', value: value ? value.label : '' },
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Ponto de Partida"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  )}
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="destino"
                  name="destino"
                  label="Destino"
                  value={formData.destino}
                  onChange={handleChange}
                  required
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="dia"
                  name="dia"
                  type="date"
                  label="Dia"
                  value={formData.dia}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  id="horario"
                  name="horario"
                  type="time"
                  label="Horário"
                  value={formData.horario}
                  onChange={handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
                <FormControl component="fieldset" margin="normal">
                  <FormLabel component="legend">Tipo de Embarque</FormLabel>
                  <RadioGroup
                    aria-label="embarqueImediato"
                    name="embarqueImediato"
                    value={formData.embarqueImediato.toString()}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value="true"
                      control={<Radio />}
                      label="Imediato"
                    />
                    <FormControlLabel
                      value="false"
                      control={<Radio />}
                      label="Agendado"
                    />
                  </RadioGroup>
                </FormControl>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!formData.pontoPartida || !formData.destino || !formData.dia || !formData.horario}
                >
                  Solicitar Carona
                </Button>
              </Stack>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SolicitarCarona;
