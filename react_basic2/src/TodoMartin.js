import { useState } from 'react';

export default function TodoMartin() {
  const [todos, setTodos] = useState([]); // 할 일 목록
  const [inputTodo, setInputTodo] = useState('');

  const addTodo = () => {
    // todos는 배열이다. 사용자가 할일을 적으면 그 값이 여기로 추가되도록 구현. 만약 할 일이 10개가 넘으면 경고 메시지 전송
    if (todos.length > 10) {
      alert('할 일이 너무 많아요');
    }
    if (inputTodo !== '') {
      // input에 작성한 것이 있을 시에만 작동
      // 새로운 객체를 만들고 이 객체를 todos에 넣는다.
      const newTodo = {
        id: Date.now(),
        text: inputTodo,
        checked: false,
      };
      setTodos([...todos, newTodo]);
      // todos에 넣었으면 다시 input창은 빈 문자열로 바뀜
      setInputTodo('');
    }
  };

  // 체크박스 on/off
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        // console.log(todo);
        // 내가 체크한 박스의 id가 todos에 있는 id와 동일하다면 todo의 나머지 요소는 변하지 않고 checked요소만 반대로 해준다.
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  // 선택된 체크박스만 삭제
  const removeTodo = () => {
    const result = todos.filter((value) => value.checked === false);
    setTodos(result);
  };
  return (
    <>
      <input
        type='text'
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder='할 일 입력...'
      ></input>
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type='checkbox' checked={todo.checked} onChange={() => toggleTodo(todo.id)} />
              {todo.text}
            </li>
          );
        })}
      </ul>
      <button onClick={removeTodo}>완료된 할 일 삭제</button>
    </>
  );
}
