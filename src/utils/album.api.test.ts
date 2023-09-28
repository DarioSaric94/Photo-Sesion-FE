import {
  postAlbum,
  getAlbums,
  deleteAlbum,
  getAlbumById,
  getAlbumByIdByAdmin,
} from './album.api';
import { StatusCode, AlbumSesionRo } from './types';
import { POST, GET } from './fetch';
import { toast } from 'react-toastify';

jest.mock('./fetch');
jest.mock('react-toastify');

describe('API Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('postAlbum should make a POST request to the correct endpoint and return StatusCode', async () => {
    const mockStatusCode: StatusCode = { statusCode: 200 };
    (POST as jest.Mock).mockResolvedValue(mockStatusCode);

    const formData = new FormData();

    const result = await postAlbum(formData);

    expect(result).toEqual(mockStatusCode);
    expect(POST).toHaveBeenCalledWith('album/', formData);
  });

  it('getAlbums should make a GET request to the correct endpoint and return AlbumSesionRo', async () => {
    const mockAlbums: AlbumSesionRo = {
      statusCode: 200,
      album: {
        id: 1,
        albumName: 'Test Album',
        participants: 'Test Participants',
        albumPath: '/path/to/album',
        images: [],
      },
    };
    (GET as jest.Mock).mockResolvedValue(mockAlbums);

    const result = await getAlbums();

    expect(result).toEqual(mockAlbums);
    expect(GET).toHaveBeenCalledWith('album/');
  });

  it('deleteAlbum should make a POST request to the correct endpoint and return StatusCode', async () => {
    const mockStatusCode: StatusCode = { statusCode: 204 };
    (POST as jest.Mock).mockResolvedValue(mockStatusCode);

    const deleteAlbumProps = {
      albumId: 1,
      password: 'password',
    };

    const result = await deleteAlbum(deleteAlbumProps);

    expect(result).toEqual(mockStatusCode);
    expect(POST).toHaveBeenCalledWith('album/delete/', deleteAlbumProps);
  });

  it('getAlbumById should make a POST request to the correct endpoint and return AlbumSesionRo', async () => {
    const mockAlbum: AlbumSesionRo = {
      statusCode: 200,
      album: {
        id: 1,
        albumName: 'Test Album',
        participants: 'Test Participants',
        albumPath: '/path/to/album',
        images: [],
      },
    };
    (POST as jest.Mock).mockResolvedValue(mockAlbum);

    const getAlbumByIdProps = {
      id: '1',
      password: 'password',
    };

    const result = await getAlbumById(getAlbumByIdProps);

    expect(result).toEqual(mockAlbum);
    expect(POST).toHaveBeenCalledWith('album/private/', getAlbumByIdProps);
  });

  it('getAlbumByIdByAdmin should make a GET request to the correct endpoint and return AlbumSesionRo', async () => {
    const mockAlbum: AlbumSesionRo = {
      statusCode: 200,
      album: {
        id: 1,
        albumName: 'Test Album',
        participants: 'Test Participants',
        albumPath: '/path/to/album',
        images: [],
      },
    };
    (GET as jest.Mock).mockResolvedValue(mockAlbum);

    const result = await getAlbumByIdByAdmin('1');

    expect(result).toEqual(mockAlbum);
    expect(GET).toHaveBeenCalledWith('album/1');
  });

  it('should handle errors and display a toast message in case of failure', async () => {
    (POST as jest.Mock).mockRejectedValue(new Error('Network error'));
    const formData = new FormData();

    await postAlbum(formData);

    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});
