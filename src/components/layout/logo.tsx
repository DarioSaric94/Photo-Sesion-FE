import { Box } from '@mui/material';
import { useRouter } from 'next/router';

export const Logo = () => {
  const router = useRouter();
  return (
    <Box
      data-testid="logo-test"
      display="flex"
      letterSpacing={-0.5}
      fontWeight="bold"
      sx={{ cursor: 'pointer' }}
      onClick={() => router.push('/')}
    >
      <Box fontSize={40} color="secondary.main">
        F
      </Box>
      <Box fontSize={27} mr={2} color="primary.dark">
        <Box mt={0.5}>OTO</Box>
        <Box borderTop={2} />
      </Box>
      <Box fontSize={40} color="secondary.main">
        S
      </Box>
      <Box fontSize={27} mr={1} color="primary.dark">
        <Box mt={0.5}>TEVOS</Box>
        <Box borderTop={2} />
      </Box>
    </Box>
  );
};
