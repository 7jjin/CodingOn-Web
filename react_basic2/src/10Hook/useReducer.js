import { useReducer } from 'react';

// 초기값
const initalState = { count: 0 };

// reducer함수(상태,액션)을 받아 새로운 상태를 반환하는 함수.
// reducer(state,action), 액션에는 type이 존재
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      throw new Error('error');
  }
}

export default function Count() {
  // reducer: state를 업데이트하는 함수
  // state: 현재 상태
  // dispatch: 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, initalState);
  return (
    <div>
      <p>count:{state.count}</p>
      {/* type을 보낼 때 객체 형태로 보내야 한다. */}
      {/* 관례상으로 state로 객체를 보낼 때는 type을 써서 구분해 준다. */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
    </div>
  );
}
