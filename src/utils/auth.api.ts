import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { LoginUserRo, MessageObj } from './types';
export const AUTH_URL = 'auth/';
export const RESET_PASSWORD_URL = 'reset-password/';
export const LOGIN_URL = 'login/';
export const CHANGE_PASSWORD_URL = 'change-password/';
export const USER_URL = 'user/';

interface SigninProps {
  email?: string;
  password?: string;
}

export const signIn = async (
  data: SigninProps
): Promise<LoginUserRo | undefined> => {
  try {
    return await POST(`${AUTH_URL}${LOGIN_URL}`, data);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

interface ResetPasswordProps {
  email?: string;
}

export const resetPassword = async (
  email: ResetPasswordProps
): Promise<MessageObj | undefined> => {
  try {
    return await POST(`${AUTH_URL}${RESET_PASSWORD_URL}`, { email });
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
    return await POST(`${AUTH_URL}${CHANGE_PASSWORD_URL}${token}`, {
      password,
    });
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getUserData = async (): Promise<LoginUserRo | undefined> => {
  try {
    return await GET(`${AUTH_URL}${USER_URL}`);
  } catch (error) {
    toast.error('Something went wrong');
  }
};
