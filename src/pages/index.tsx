import { Container } from '@/components/layout/container';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <Box display="flex" justifyContent="center" flexDirection="column">
        <Box width={500} height={500} border={2} borderColor="white" mt={5} />
        <Box width={500} height={500} border={2} borderColor="white" mt={5} />

        <Box width={500} height={500} border={2} borderColor="white" mt={5} />

        <Box width={500} height={500} border={2} borderColor="white" mt={5} />

        <Box width={500} height={500} border={2} borderColor="white" mt={5} />

        <Box width={500} height={500} border={2} borderColor="white" mt={5} />

        <Box width={500} height={500} border={2} borderColor="white" mt={5} />
      </Box>
    </Container>
  );
}
