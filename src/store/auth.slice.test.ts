import authReducer, { login, logOut } from './auth.slice';

describe('auth slice', () => {
  it('should handle login action', () => {
    const initialState = {
      token: null,
      userData: null,
    };

    const userData = {
      createdAt: '2023-09-27',
      email: 'example@example.com',
      id: 1,
      role: 2,
      token: 'token',
    };

    const token = 'token';

    const userDataWithoutToken = {
      createdAt: '2023-09-27',
      email: 'example@example.com',
      id: 1,
      role: 2,
    };

    const newState = authReducer(initialState, login(userData));

    expect(newState.token).toEqual(token);
    expect(newState.userData).toEqual(userDataWithoutToken);
    expect(localStorage.getItem('ACCESS_TOKEN')).toEqual(userData.token);
    expect(localStorage.getItem('USER_DATA')).toEqual(
      JSON.stringify(userDataWithoutToken)
    );
  });

  it('should handle logOut action', () => {
    const initialState = {
      token: 'someToken',
      userData: {
        createdAt: '2023-09-27',
        email: 'example@example.com',
        id: 1,
        role: 2,
      },
    };

    const newState = authReducer(initialState, logOut());

    expect(newState.token).toBeNull();
    expect(newState.userData).toBeNull();
    expect(localStorage.getItem('ACCESS_TOKEN')).toBeNull();
    expect(localStorage.getItem('USER_DATA')).toBeNull();
  });
});
