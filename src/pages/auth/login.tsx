import { Box, Typography } from '@mui/material';
import { CustomButton } from '@/components/shared/customButton';
import { LinkText } from '@/components/shared/linkText';
import { useRouter } from 'next/router';
import { login } from '@/store/auth.slice';
import { signIn } from '@/utils/auth.api';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Input } from '@/components/shared/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export default function Login() {
  const { handleSubmit, register } = useForm();

  const router = useRouter();
  const dispatch = useDispatch();

  const loginUserHandler: SubmitHandler<FieldValues> = async (formValues) => {
    const response: any = await signIn(formValues);
    console.log(response);
    if (response?.status === 200) {
      toast.success(response?.message);
      dispatch(login(response?.userData));
      router.push('/');
    } else {
      toast.error(response?.message);
    }
  };
  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box p={5} width="100%" maxWidth={330}>
        <Typography
          fontSize={32}
          fontWeight="bold"
          textAlign="center"
          mb={3}
          color="primary.main"
        >
          Login
        </Typography>
        <Input
          label="Email address"
          type="email"
          name="email"
          register={register}
        />
        <Box mt={3} />
        <Input
          label="Password"
          type="password"
          name="password"
          register={register}
        />
        <LinkText
          link="Forgot your password?"
          onClick={() => router.push('/auth/reset-password')}
        />
        <CustomButton
          fullWidth
          variant="outlined"
          text="LOGIN"
          onClick={handleSubmit(loginUserHandler)}
        />
      </Box>
    </Box>
  );
}
