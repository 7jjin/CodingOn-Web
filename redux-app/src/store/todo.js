import { createStore } from 'redux';

// 상수의 변수
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

//reducer
// state: 초기값설정, action: dispatch로 받아온 값
// 예를 들어 dispatch type:ADD_TODO 인경우는 text: input.value를 보냈으니깐 action에서는 action.text로 받을 수있다.
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      // 현재는 state의 초기값을 빈 배열로 만들었기 때문에 ADD_TODO가 실행될 때마다 새로운 객체를 넣어준다.
      const newTodo = { text: action.text, id: Date.now() };
      return [newTodo, ...state];
    case DELETE_TODO:
      // 클릭한 id와 리스트에 있는 요소의 id가 다른것만 출력
      return state.filter((el) => Number(el.id) !== Number(action.id));
    default:
      return state;
  }
};
//store
const store = createStore(reducer);

export default store;
