import { UserData } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserDataWithoutToken {
  createdAt: string;
  email: string;
  favoriteCourses: any[];
  id: number;
  role: number;
}

export interface AuthState {
  token: string | null;
  userData: UserDataWithoutToken | null;
}

const setUser = () => {
  if (typeof window !== 'undefined') {
    const savedUser = localStorage.getItem('USER_DATA') || null;
    if (savedUser) {
      return JSON.parse(savedUser);
    }
  }
  return null;
};

const setToken = () => {
  if (typeof window !== 'undefined') {
    const savedToken = localStorage.getItem('ACCESS_TOKEN') || null;
    if (savedToken) {
      return savedToken;
    }
  }
  return null;
};

const initialState: AuthState = {
  token: setToken(),
  userData: setUser(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserData>) {
      const { token, ...userData } = action.payload;
      state.token = token;
      localStorage.setItem('ACCESS_TOKEN', token);
      state.userData = userData;
      localStorage.setItem('USER_DATA', JSON.stringify(userData));
    },
    logOut(state) {
      state.token = null;
      state.userData = null;
      localStorage.clear();
    },
    likeDislikeCourse(state, action) {
      const courseId = action.payload;

      if (state.userData?.favoriteCourses) {
        const existingIndex = state.userData.favoriteCourses.findIndex(
          (course) => course.courseId === courseId
        );
        if (existingIndex !== -1) {
          state.userData.favoriteCourses.splice(existingIndex, 1);
        } else {
          state.userData.favoriteCourses.push({ courseId });
        }
      }
    },
  },
});

export const { login, logOut, likeDislikeCourse } = authSlice.actions;
export default authSlice.reducer;
