import userDataReducer, { setUserData } from './userData.slice';

describe('userData slice', () => {
  it('should handle setUserData action', () => {
    const initialState = {
      userData: {},
    };

    const userData = {
      createdAt: '2023-09-27',
      email: 'example@example.com',
      id: 1,
      role: 2,
    };

    const newState = userDataReducer(initialState, setUserData(userData));

    expect(newState.userData).toEqual(userData);
  });
});
