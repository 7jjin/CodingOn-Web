import { createSlice } from '@reduxjs/toolkit';

const initCount = {
  counter: 10,
};

// createSlice() : 리듀서와 액션을 함께 생성하는 함수
const counterSlice = createSlice({
  name: 'counter',
  initialState: initCount,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    calc(state, action) {
      console.log(action.payload.plus);
      const { plus, minus } = action.payload;
      state.counter = state.counter + plus;
    },
  },
});

// 리듀서만 사용할 것이기 때문
export default counterSlice.reducer;
export const counterAction = counterSlice.actions;
