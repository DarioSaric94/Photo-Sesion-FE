import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.slice';
import userDataReducer from './userData.slice';
import { AppDispatch, RootState } from './store';

describe('Redux Store Configuration', () => {
  let store: ReturnType<typeof configureStore>;
  let dispatch: AppDispatch;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        auth: authReducer,
        userData: userDataReducer,
      },
    });
    dispatch = store.dispatch;
  });

  afterEach(() => {
    store = undefined as any;
    dispatch = undefined as any;
  });

  it('should create a store with the specified reducers', () => {
    expect(store).toBeDefined();
  });

  it('should have initial state for auth and userData', () => {
    const initialState: RootState = store.getState() as any;
    expect(initialState.auth).toBeDefined();
    expect(initialState.userData).toBeDefined();
  });
});
