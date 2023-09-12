import { Card } from '@/components/shared/card';
import { CustomButton } from '@/components/shared/customButton';
import { LinkText } from '@/components/shared/linkText';
import { Box, Typography, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { resetPassword } from '@/utils/auth.api';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Container } from '@/components/layout/container';

export default function ResetPassword() {
  const [email, setEmail] = useState<string>('');
  const router = useRouter();

  const resetPasswordHandler = async () => {
    const response = await resetPassword({ email });
    if (response?.statusCode === 200) {
      toast.success(response?.message);
    } else {
      toast.error(response?.message);
    }
  };
  return (
    <Container height="80vh">
      <Box display="flex" justifyContent="center" mt={10}>
        <Card maxWidth={350} width="100%">
          <Box p={1}>
            <Typography
              fontSize={28}
              fontWeight="bold"
              textAlign="center"
              mb={5}
            >
              Reset your password
            </Typography>
            <TextField
              InputLabelProps={{ shrink: false }}
              placeholder="Email address"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <LinkText
              link="Back to login"
              onClick={() => router.push('/auth/login')}
            />
            <CustomButton
              variant="contained"
              width="100%"
              text="Send instructions"
              onClick={resetPasswordHandler}
            />
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
