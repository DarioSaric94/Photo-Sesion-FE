import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { LoginUserRo, ResponseObj } from './types';

interface SigninProps {
  email?: string;
  password?: string;
}

export const signIn = async (data: SigninProps): Promise<LoginUserRo> => {
  try {
    return await POST('auth/login', data);
  } catch (error) {
    toast.error('Something went wrong');
    throw error;
  }
};

interface ResetPasswordProps {
  email?: string;
}

export const resetPassword = async (
  email: ResetPasswordProps
): Promise<ResponseObj | undefined> => {
  try {
    return await POST('auth/reset-password', { email });
  } catch (error) {
    toast.error('Something went wrong');
  }
};

interface ChangePasswordProps {
  password: string;
  token: string;
}

export const changePassword = async ({
  password,
  token,
}: ChangePasswordProps): Promise<LoginUserRo | undefined> => {
  try {
    return await POST(`auth/change-password/${token}`, {
      password,
    });
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getUserData = async (): Promise<LoginUserRo | undefined> => {
  try {
    return await GET(`auth/user`);
  } catch (error) {
    toast.error('Something went wrong');
  }
};
