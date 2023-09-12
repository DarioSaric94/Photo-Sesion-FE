import { Card } from '@/components/shared/card';
import { CustomButton } from '@/components/shared/customButton';
import { LinkText } from '@/components/shared/linkText';
import { Box, Typography, TextField } from '@mui/material';
import { useRouter } from 'next/router';

import { useState } from 'react';
import { changePassword } from '@/utils/auth.api';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '@/store/auth.slice';
import { Container } from '@/components/layout/container';

export default function ResetPassword() {
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();
  const token = router.query.token as string;
  const dispatch = useDispatch();

  const changePasswordHandler = async () => {
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    const response = await changePassword({ password, token });
    if (response?.statusCode === 201) {
      toast.success(response?.message);
      dispatch(login(response?.userData));
      router.push('/');
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
              New Password
            </Typography>
            <TextField
              InputLabelProps={{ shrink: false }}
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <TextField
              InputLabelProps={{ shrink: false }}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <LinkText
              link="Back to login"
              onClick={() => router.push('/auth/login')}
            />
            <CustomButton
              onClick={changePasswordHandler}
              variant="contained"
              width="100%"
              text="Confirm reset"
            />
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
