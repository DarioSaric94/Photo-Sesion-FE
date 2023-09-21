import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { AlbumSesionRo, StatusCode } from './types';
const ALBUM = 'album/';
const DELETE = 'delete/';
const PRIVATE = 'private/';

export const postAlbum = async (
  formData: FormData
): Promise<StatusCode | undefined> => {
  try {
    return await POST(ALBUM, formData);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getAlbums = async (): Promise<AlbumSesionRo | undefined> => {
  try {
    return await GET(ALBUM);
  } catch (error) {}
};

interface DeleteAlbumProps {
  albumId?: number;
  password: string;
}

export const deleteAlbum = async (
  data: DeleteAlbumProps
): Promise<StatusCode | undefined> => {
  try {
    return await POST(`${ALBUM}${DELETE}`, data);
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
    return await POST(`${ALBUM}${PRIVATE}`, data);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getAlbumByIdByAdmin = async (
  id: string
): Promise<AlbumSesionRo | undefined> => {
  try {
    return await GET(`${ALBUM}${id}`);
  } catch (error) {
    toast.error('Something went wrong');
  }
};
