import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { ADD_TODO } from './store/todo';

export default function Main() {
  const [text, setText] = useState('');

  //useSelect() : 리덕스 store의 state를 조회
  //인자로 콜백함수,콜백함수의 매개변수로 state를 받을 수 있음.
  //자동으로 subscribe를 하고 있기 때문에 데이터가 변형되면 컴포넌트가 재실행
  const todos = useSelector((state) => state);
  console.log(todos);

  //dispatch는 우리가 호출 할 수 있는 함수.
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text: text });
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>To Dos</h1>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id} id={todo.id}>
              {todo.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
