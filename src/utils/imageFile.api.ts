import { POST } from './fetch';
import { toast } from 'react-toastify';
import { FileImagesRo } from './types';
export const FILE_URL = 'file/';

interface GetImageFileProps {
  albumPath: string;
  albumPassword: string;
  albumId: number;
}

export const getImageFile = async (
  data: GetImageFileProps
): Promise<FileImagesRo | undefined> => {
  try {
    return await POST(`${FILE_URL}`, data);
  } catch (error) {
    toast.error('Something went wrong');
  }
};
