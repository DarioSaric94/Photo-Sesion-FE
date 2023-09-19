import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { LoginUserRo } from './types';
const ALBUM = 'album/';

interface PostAlbumProps {
  albumName: string;
  participants: string;
  albumPassword: string;
  images: File[];
}

export const postAlbum = async ({
  formData,
}: PostAlbumProps): Promise<LoginUserRo | undefined> => {
  console.log(formData);
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
