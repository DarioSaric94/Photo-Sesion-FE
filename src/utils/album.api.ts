import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { LoginUserRo } from './types';
const ALBUM = 'album/';
const DELETE = 'delete/';

interface PostAlbumProps {
  albumName: string;
  participants: string;
  albumPassword: string;
  images: File[];
}

export const postAlbum = async (
  formData: any
): Promise<LoginUserRo | undefined> => {
  try {
    return await POST(ALBUM, formData);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getAlbums = async (): Promise<LoginUserRo | undefined> => {
  try {
    return await GET(ALBUM);
  } catch (error) {}
};

export const deleteAlbum = async (
  data: any
): Promise<LoginUserRo | undefined> => {
  try {
    return await POST(`${ALBUM}${DELETE}`, data);
  } catch (error) {
    toast.error('Something went wrong');
  }
};
