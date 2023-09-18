import { UserInfo } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { userData: UserInfo } = {
  userData: {},
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserInfo | {}>) {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
