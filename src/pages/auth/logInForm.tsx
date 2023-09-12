import { CustomButton } from '@/components/shared/customButton';
import { LinkText } from '@/components/shared/linkText';
import { signIn } from '@/utils/auth.api';
import { Box, Typography, TextField, Divider } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { login } from '@/store/auth.slice';
import { Card } from '@/components/shared/card';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const dispatch = useDispatch();

  const loginUserHandler = async () => {
    const response = await signIn({ email, password });
    if (response?.statusCode === 200) {
      toast.success(response?.message);
      dispatch(login(response?.userData));
      router.push('/');
    } else {
      toast.error(response?.message);
    }
  };
  return (
    <Card maxWidth={350} width="100%">
      <Box p={1}>
        <Typography fontSize={28} fontWeight="bold" textAlign="center" mb={5}>
          Sign in to your account
        </Typography>
        <TextField
          InputLabelProps={{ shrink: false }}
          placeholder="Email address"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <TextField
          InputLabelProps={{ shrink: false }}
          placeholder="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />
        <LinkText
          link="Forgot your password?"
          onClick={() => router.push('/auth/reset-password')}
        />
        <CustomButton
          variant="contained"
          width="100%"
          text="Sign in"
          onClick={loginUserHandler}
        />
        <Divider sx={{ mb: 2, mt: 2 }} />
        <CustomButton
          onClick={() => {}}
          variant="outlined"
          width="100%"
          text="Continue with Facebook"
          icon={FacebookIcon}
        />
        <Box mt={2} />
        <CustomButton
          onClick={() => {}}
          variant="outlined"
          width="100%"
          text="Continue with Google"
          icon={GoogleIcon}
        />
      </Box>
    </Card>
  );
};
