// 리덕스를 이용한 숫자증가, 감소 코드
import { createStore } from 'redux';

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const num = document.querySelector('#num');

const init = {
  count: 0,
};

//리듀서
const countReducer = (state = init, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD':
      return state.count + 1;
    case 'MINUS':
      return state.count - 1;
    default:
      return state.count;
  }
};

//storer는 데이터를 넣는곳
//createStore: store생성, 리듀서 함수 필수
const countStore = createStore(countReducer);
console.log(countStore);

countStore.dispatch({ type: 'ADD' });

console.log(countStore.getState());

// 자바스크립트를 이용한 숫자증가, 감소 코드

// let count = 0;

// add.addEventListener('click', () => {
//   count = count + 1;
//   num.textContent = count;
// });

// minus.addEventListener('click', () => {
//   count = count - 1;
//   num.textContent = count;
// });
