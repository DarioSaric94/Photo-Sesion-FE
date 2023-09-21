import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { UserInfoRo } from './types';

export const postUserData = async (
  formData: FormData
): Promise<UserInfoRo | undefined> => {
  try {
    return await POST('user-data', formData);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getUserData = async (): Promise<UserInfoRo | undefined> => {
  try {
    return await GET('user-data');
  } catch (error) {}
};
