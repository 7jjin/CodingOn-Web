import { createSlice } from '@reduxjs/toolkit';

const initLogin = {
  isLogin: false,
};
const loginSlice = createSlice({
  name: 'login',
  initialState: initLogin,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export default loginSlice.reducer;
export const loginAction = loginSlice.actions;
