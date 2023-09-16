import { Box } from '@mui/material';

export const Logo = () => {
  return (
    <Box display="flex" letterSpacing={-0.5} fontWeight="bold">
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
