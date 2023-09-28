import { signIn, resetPassword, changePassword, getUserData } from './auth.api';
import { toast } from 'react-toastify';
import * as fetchModule from './fetch';
import { LoginUserRo } from './types';

jest.mock('./fetch');
jest.mock('react-toastify');

describe('signIn', () => {
  const mockResponse: LoginUserRo = {
    userData: {
      createdAt: 'createdAt',
      email: 'email',
      id: 1,
      role: 1,
      token: 'token',
    },
    statusCode: 200,
    message: 'message',
  };
  const data = {
    email: 'email',
    password: 'password',
  };
  const postMock = jest.spyOn(fetchModule, 'POST');
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should class POST with correct url and data', async () => {
    postMock.mockResolvedValue(mockResponse);

    await signIn(data);

    expect(postMock).toHaveBeenCalledWith('auth/login', data);
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(mockResponse);

    const result = await signIn(data);

    expect(result).toEqual(mockResponse);
  });

  it('should handle errors and displat toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await signIn(data);

    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});
