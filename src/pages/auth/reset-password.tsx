import { CustomButton } from '@/components/shared/customButton';
import { LinkText } from '@/components/shared/linkText';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { resetPassword } from '@/utils/auth.api';
import { toast } from 'react-toastify';
import { Input } from '@/components/shared/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export default function ResetPassword() {
  const { handleSubmit, register } = useForm();
  const router = useRouter();

  const resetPasswordHandler: SubmitHandler<FieldValues> = async ({
    email,
  }) => {
    const response = await resetPassword(email);

    if (response?.status === 201) {
      toast.success(response?.data?.message);
    } else {
      toast.error(response?.data?.message);
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
          fontSize={30}
          fontWeight="bold"
          textAlign="center"
          mb={3}
          color="primary.main"
        >
          Forgot Password?
        </Typography>
        <Input
          label="Email address"
          type="email"
          name="email"
          register={register}
        />
        <LinkText
          link="Back to login"
          onClick={() => router.push('/auth/login')}
        />
        <CustomButton
          fullWidth
          variant="outlined"
          text="SEND INSTRUCTIONS"
          onClick={handleSubmit(resetPasswordHandler)}
        />
      </Box>
    </Box>
  );
}
