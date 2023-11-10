import {
  signIn,
  resetPassword,
  changePassword,
  getUserData,
  AUTH_URL,
  RESET_PASSWORD_URL,
  LOGIN_URL,
  CHANGE_PASSWORD_URL,
  USER_URL,
} from './auth.api';
import { toast } from 'react-toastify';
import * as fetchModule from './fetch';
import { LoginUserRo, ResponseRo } from './types';

jest.mock('./fetch');
jest.mock('react-toastify');

describe('signIn', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockResponse: LoginUserRo = {
    userData: {
      createdAt: 'createdAt',
      email: 'email',
      id: 1,
      role: 1,
      token: 'token',
    },
    status: 200,
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

  it('should call POST with correct url and data', async () => {
    postMock.mockResolvedValue(mockResponse);

    await signIn(data);

    expect(postMock).toHaveBeenCalledWith(`${AUTH_URL}${LOGIN_URL}`, data);
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

describe('resetPassword', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockResponse: ResponseRo = {
    status: 200,
    message: 'message',
  };
  const email = { email: 'someEmail' };
  const postMock = jest.spyOn(fetchModule, 'POST');
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call POST with correct url and data', async () => {
    postMock.mockResolvedValue(mockResponse);

    await resetPassword(email);

    expect(postMock).toHaveBeenCalledWith(`${AUTH_URL}${RESET_PASSWORD_URL}`, {
      email,
    });
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(mockResponse);

    const result = await resetPassword(email);

    expect(result).toEqual(mockResponse);
  });

  it('should handle errors and display toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await resetPassword(email);

    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});

describe('changePassword', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockResponse: LoginUserRo = {
    userData: {
      createdAt: 'createdAt',
      email: 'email',
      id: 1,
      role: 1,
      token: 'token',
    },
    status: 200,
    message: 'message',
  };
  const data = { password: 'password', token: 'token' };
  const postMock = jest.spyOn(fetchModule, 'POST');
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call POST with correct url and data', async () => {
    postMock.mockResolvedValue(mockResponse);

    await changePassword(data);

    expect(postMock).toHaveBeenCalledWith(
      `${AUTH_URL}${CHANGE_PASSWORD_URL}${data.token}`,
      { password: data.password }
    );
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(mockResponse);

    const result = await changePassword(data);

    expect(result).toEqual(mockResponse);
  });

  it('should handle errors and display toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await changePassword(data);

    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});

describe('getUserData', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockResponse: LoginUserRo = {
    userData: {
      createdAt: 'createdAt',
      email: 'email',
      id: 1,
      role: 1,
      token: 'token',
    },
    status: 200,
    message: 'message',
  };
  const postMock = jest.spyOn(fetchModule, 'GET');
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call POST with correct url and data', async () => {
    postMock.mockResolvedValue(mockResponse);

    await getUserData();

    expect(postMock).toHaveBeenCalledWith(`${AUTH_URL}${USER_URL}`);
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(mockResponse);

    const result = await getUserData();

    expect(result).toEqual(mockResponse);
  });

  it('should handle errors and display toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await getUserData();

    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});
