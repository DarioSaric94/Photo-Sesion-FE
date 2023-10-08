import { USER_DATA_URL, getUserData, postUserData } from './userData.api';
import { UserInfoRo } from './types';
import { toast } from 'react-toastify';
import * as fetchModule from './fetch';

jest.mock('./fetch');
jest.mock('react-toastify');

describe('postUserData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const responseMock: UserInfoRo = {
    userData: {},
  };
  const formData = new FormData();
  const postMock = jest.spyOn(fetchModule, 'POST');

  it('should call POST with correct url and data', async () => {
    postMock.mockResolvedValue(responseMock);

    await postUserData(formData);

    expect(postMock).toHaveBeenCalledWith(USER_DATA_URL, formData);
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(responseMock);

    const result = await postUserData(formData);

    expect(result).toEqual(responseMock);
  });

  it('should handle errors and displat toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await postUserData(formData);

    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});

describe('getUserData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const responseMock: UserInfoRo = {
    userData: {},
  };
  const getMock = jest.spyOn(fetchModule, 'GET');

  it('should call POST with correct url and data', async () => {
    getMock.mockResolvedValue(responseMock);

    await getUserData();

    expect(getMock).toHaveBeenCalledWith(USER_DATA_URL);
  });

  it('should return the response on successful POST', async () => {
    getMock.mockResolvedValue(responseMock);

    const result = await getUserData();

    expect(result).toEqual(responseMock);
  });
});
