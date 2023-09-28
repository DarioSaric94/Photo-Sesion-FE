import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { UserInfoRo } from './types';
export const USER_DATA_URL = 'user-data/';

export const postUserData = async (
  formData: FormData
): Promise<UserInfoRo | undefined> => {
  try {
    return await POST(USER_DATA_URL, formData);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getUserData = async (): Promise<UserInfoRo | undefined> => {
  try {
    return await GET(USER_DATA_URL);
  } catch (error) {}
};
