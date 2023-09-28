import { getImageFile, FILE_URL } from './imageFile.api';
import { toast } from 'react-toastify';
import * as fetchModule from './fetch';

jest.mock('./fetch');
jest.mock('react-toastify');

describe('getImageFile', () => {
  const postMock = jest.spyOn(fetchModule, 'POST');
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const data = {
    albumPath: 'albumPath',
    albumPassword: 'albumPassword',
    albumId: 123,
  };
  const mockResponse = {
    url: 'https://example.com/image.jpg',
    sessionToken: 'token',
  };

  it('should call POST with the correct URL and data', async () => {
    postMock.mockResolvedValue(mockResponse);

    await getImageFile(data);

    expect(postMock).toHaveBeenCalledWith(FILE_URL, data);
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(mockResponse);

    const result = await getImageFile(data);

    expect(result).toEqual(mockResponse);
  });

  it('should handle errors and display a toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await getImageFile(data);

    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});
