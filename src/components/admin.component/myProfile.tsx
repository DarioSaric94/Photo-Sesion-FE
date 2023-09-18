import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

export const MyProfile = () => {
  const router = useRouter();
  return (
    <Box position="absolute" right={10} bottom={10} zIndex={10}>
      <Button
        onClick={() => router.push('/profile')}
        variant="outlined"
        sx={{
          textTransform: 'none',
          fontSize: 10,
          fontWeight: 'bold',
          '&:hover': {
            borderColor: 'secondary.main',
            color: 'secondary.main',
          },
        }}
      >
        My Profile
      </Button>
    </Box>
  );
};
