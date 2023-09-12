import { Box } from '@mui/material';
import { LoginForm } from './logInForm';
import { Container } from '@/components/layout/container';

export default function Login() {
  return (
    <Container height="80vh">
      <Box display="flex" justifyContent="center" mt={10}>
        <LoginForm />
      </Box>
    </Container>
  );
}
