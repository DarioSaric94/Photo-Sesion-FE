import { CustomButton } from '@/components/shared/customButton';
import { LinkText } from '@/components/shared/linkText';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { changePassword } from '@/utils/auth.api';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { login } from '@/store/auth.slice';
import { Input } from '@/components/shared/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export default function ChangePassword() {
  const { handleSubmit, register } = useForm();
  const router = useRouter();
  const token = router.query.token as string;
  const dispatch = useDispatch();

  const changePasswordHandler: SubmitHandler<FieldValues> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    const response = await changePassword({ password: data.password, token });
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
          New Password
        </Typography>
        <Input
          label="New Password"
          type="password"
          name="password"
          register={register}
        />
        <Box mt={3} />
        <Input
          label="Confirm New Password"
          type="password"
          name="confirmPassword"
          register={register}
        />

        <LinkText
          link="Back to login"
          onClick={() => router.push('/auth/login')}
        />
        <CustomButton
          fullWidth
          onClick={handleSubmit(changePasswordHandler)}
          variant="outlined"
          text="CHANGE PASSWORD"
        />
      </Box>
    </Box>
  );
}
