import Grid from '@mui/joy/Grid';
import Container from '../components/Container';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Link from '@mui/joy/Link';

const Login = () => {
 return (
  <Container>
    <Box container spacing={1} sx={{ flexGrow: 1, p: 5, border: '1px ridge grey', borderRadius: 10 }}>
      <h2>Login</h2>
    
      <Grid xs={6} md={12}>
        <form>
          <Stack spacing={2}>
            
            <p>Usuário:</p>
            <Input placeholder="Nome de usuário ou email" />

            <p>Senha:</p>
            <Input type="password" placeholder="Senha" />
         
            <Button type="submit">Entrar</Button>

            <Divider />
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
              <p>Não tem uma conta?</p>
              <Link>Cadastre-se</Link>
            </Box>

          </Stack>
        </form>
      </Grid>
    </Box>
  </Container>

  );
};

export default Login;
