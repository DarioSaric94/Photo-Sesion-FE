import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { LoginUserRo, ResponseObj } from './types';

interface RegisterProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export const register = async ({
  email,
  password,
}: RegisterProps): Promise<LoginUserRo | undefined> => {
  try {
    return await POST('auth/register', { email, password });
  } catch (error) {
    toast.error('Something went wrong');
  }
};

interface SigninProps {
  email: string;
  password: string;
}

export const signIn = async ({
  email,
  password,
}: SigninProps): Promise<LoginUserRo | undefined> => {
  try {
    return await POST('auth/login', { email, password });
  } catch (error) {
    toast.error('Something went wrong');
  }
};

interface ResetPasswordProps {
  email: string;
}

export const resetPassword = async ({
  email,
}: ResetPasswordProps): Promise<ResponseObj | undefined> => {
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
