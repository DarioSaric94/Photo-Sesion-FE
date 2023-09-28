import {
  postAlbum,
  getAlbums,
  deleteAlbum,
  getAlbumById,
  getAlbumByIdByAdmin,
  ALBUM_URL,
  DELETE_URL,
  PRIVATE_URL,
} from './album.api';
import { StatusCode, AlbumSesionRo } from './types';
import { toast } from 'react-toastify';
import * as fetchModule from './fetch';

jest.mock('./fetch');
jest.mock('react-toastify');

describe('postAlbum', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const responseAlbumMock: StatusCode = {
    statusCode: 200,
  };
  const formData = new FormData();
  const postMock = jest.spyOn(fetchModule, 'POST');

  it('should call POST with correct url and data', async () => {
    postMock.mockResolvedValue(responseAlbumMock);

    await postAlbum(formData);

    expect(postMock).toHaveBeenCalledWith('album/', formData);
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(responseAlbumMock);

    const result = await postAlbum(formData);

    expect(result).toEqual(responseAlbumMock);
  });

  it('should handle errors and displat toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await postAlbum(formData);

    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});

describe('getAlbums', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const responseAlbumMock: AlbumSesionRo = {
    statusCode: 200,
    album: {
      id: 1,
      albumName: 'Test Album',
      participants: 'Test Participants',
      albumPath: '/path/to/album',
      images: [],
    },
  };
  const getMock = jest.spyOn(fetchModule, 'GET');

  it('should call POST with correct url and data', async () => {
    getMock.mockResolvedValue(responseAlbumMock);

    await getAlbums();

    expect(getMock).toHaveBeenCalledWith(ALBUM_URL);
  });

  it('should return the response on successful POST', async () => {
    getMock.mockResolvedValue(responseAlbumMock);

    const result = await getAlbums();
    expect(result).toEqual(responseAlbumMock);
  });
});

describe('deleteAlbum', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const responseAlbumMock: StatusCode = {
    statusCode: 200,
  };
  const data = {
    albumId: 1,
    password: 'password',
  };
  const postMock = jest.spyOn(fetchModule, 'POST');

  it('should call POST with correct url and data', async () => {
    postMock.mockResolvedValue(responseAlbumMock);

    await deleteAlbum(data);

    expect(postMock).toHaveBeenCalledWith(`${ALBUM_URL}${DELETE_URL}`, data);
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(responseAlbumMock);

    const result = await deleteAlbum(data);
    expect(result).toEqual(responseAlbumMock);
  });

  it('should handle errors and displat toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await deleteAlbum(data);
    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});

describe('getAlbumById', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const responseAlbumMock: AlbumSesionRo = {
    album: {
      id: 1,
      albumName: 'albumName',
      participants: 'participants',
      albumPath: 'albumPath',
      images: [],
    },
    statusCode: 200,
  };
  const data = {
    id: '1',
    password: 'password',
  };
  const postMock = jest.spyOn(fetchModule, 'POST');

  it('should call POST with correct url and data', async () => {
    postMock.mockResolvedValue(responseAlbumMock);

    await getAlbumById(data);

    expect(postMock).toHaveBeenCalledWith(`${ALBUM_URL}${PRIVATE_URL}`, data);
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(responseAlbumMock);

    const result = await getAlbumById(data);
    expect(result).toEqual(responseAlbumMock);
  });

  it('should handle errors and displat toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await getAlbumById(data);
    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});

describe('getAlbumByIdByAdmin', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const responseAlbumMock: AlbumSesionRo = {
    album: {
      id: 1,
      albumName: 'albumName',
      participants: 'participants',
      albumPath: 'albumPath',
      images: [],
    },
    statusCode: 200,
  };
  const id = '1';
  const getMock = jest.spyOn(fetchModule, 'GET');

  it('should call POST with correct url and data', async () => {
    getMock.mockResolvedValue(responseAlbumMock);

    await getAlbumByIdByAdmin(id);

    expect(getMock).toHaveBeenCalledWith(`${ALBUM_URL}${id}`);
  });

  it('should return the response on successful POST', async () => {
    getMock.mockResolvedValue(responseAlbumMock);

    const result = await getAlbumByIdByAdmin(id);
    expect(result).toEqual(responseAlbumMock);
  });

  it('should handle errors and displat toast message', async () => {
    const errorResponse = new Error('Network error');
    getMock.mockRejectedValue(errorResponse);

    await getAlbumByIdByAdmin(id);
    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});
