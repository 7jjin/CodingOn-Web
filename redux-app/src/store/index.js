import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import loginSlice from './login';

// const initCount = {
//   counter: 10,
// };

// // createSlice() : 리듀서와 액션을 함께 생성하는 함수
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initCount,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//     calc(state, action) {
//       console.log(action.payload.plus);
//       const { plus, minus } = action.payload;
//       state.counter = state.counter + plus;
//     },
//   },
// });

// const initLogin = {
//   isLogin: false,
// };
// const loginSlice = createSlice({
//   name: 'login',
//   initialState: initLogin,
//   reducers: {
//     login(state) {
//       state.isLogin = true;
//     },
//     logout(state) {
//       state.isLogin = false;
//     },
//   },
// });

// 스토어 생성
const store = configureStore({
  reducer: { count: counterSlice, login: loginSlice },
});

// export const counterAction = counterSlice.actions;

// export const loginAction = loginSlice.actions;

export default store;
