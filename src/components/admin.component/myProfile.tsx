import { RootState } from '@/store/store';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export const MyProfile = () => {
  const isAdmin = useSelector(
    (state: RootState) => state?.auth?.userData?.role
  );
  const router = useRouter();
  return (
    <>
      {isAdmin === 1 && (
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
      )}
    </>
  );
};
