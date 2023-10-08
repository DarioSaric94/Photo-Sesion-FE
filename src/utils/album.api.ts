import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { AlbumSesionRo, MessageObj } from './types';
export const ALBUM_URL = 'album/';
export const DELETE_URL = 'delete/';
export const PRIVATE_URL = 'private/';

export const postAlbum = async (
  formData: FormData
): Promise<MessageObj | undefined> => {
  try {
    return await POST(ALBUM_URL, formData);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getAlbums = async (): Promise<AlbumSesionRo | undefined> => {
  try {
    return await GET(ALBUM_URL);
  } catch (error) {}
};

interface DeleteAlbumProps {
  albumId?: number;
  password: string;
}

export const deleteAlbum = async (
  data: DeleteAlbumProps
): Promise<MessageObj | undefined> => {
  try {
    return await POST(`${ALBUM_URL}${DELETE_URL}`, data);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

interface GetAlbumByIdProps {
  id: string;
  password: string;
}

export const getAlbumById = async (
  data: GetAlbumByIdProps
): Promise<AlbumSesionRo | undefined> => {
  try {
    return await POST(`${ALBUM_URL}${PRIVATE_URL}`, data);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getAlbumByIdByAdmin = async (
  id: string
): Promise<AlbumSesionRo | undefined> => {
  try {
    return await GET(`${ALBUM_URL}${id}`);
  } catch (error) {
    toast.error('Something went wrong');
  }
};
