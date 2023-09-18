import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { LoginUserRo, ResponseObj } from './types';

interface postUserDataProps {
  formData: any;
}

export const postUserData = async ({
  formData,
}: postUserDataProps): Promise<LoginUserRo | undefined> => {
  try {
    return await POST('user-data', formData);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getUserData = async (): Promise<LoginUserRo | undefined> => {
  try {
    return await GET('user-data');
  } catch (error) {}
};
