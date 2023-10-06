// 리덕스를 이용한 숫자증가, 감소 코드

/*
import { createStore } from 'redux';

const input = document.querySelector('input');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

// 상수의 변수
const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

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

const removeTodo = (event) => {
  event.preventDefault();
  store.dispatch({ type: DELETE_TODO, id: event.target.parentNode.id });
};

store.subscribe(() => {
  // 최신값 가져오기
  // 데이터 최신화 한 것을 출력해주는 것이 여기인 듯. 데이터 최신화 한것을 todos에 넣는다.
  const todos = store.getState();
  // 모든 리스트를 지우고 재렌더링
  ul.innerHTML = '';
  todos.map((value) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.innerText = '삭제';
    btn.addEventListener('click', removeTodo);
    li.id = value.id;
    li.innerText = value.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  store.dispatch({ type: ADD_TODO, text: input.value });
  input.value = '';
});

/*
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const num = document.querySelector('#num');

const ADD = 'ADD';
const MINUS = 'MINUS';

const init = {
  count: 0,
};

//리듀서
const countReducer = (state = init, action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case MINUS:
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

//storer는 데이터를 넣는곳
//createStore: store생성, 리듀서 함수 필수
const countStore = createStore(countReducer);
console.log(countStore);

// subscribe()는 데이터와 저장소가 변경될 때마다 콜백함수를 실행
countStore.subscribe(() => {
  // getState()는 저장소에서 최신상태의 값을 반환할때 쓰는 메소드
  num.textContent = countStore.getState().count;
});

add.addEventListener('click', () => {
  countStore.dispatch({ type: ADD });
});

minus.addEventListener('click', () => {
  countStore.dispatch({ type: MINUS });
});

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

*/

import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
