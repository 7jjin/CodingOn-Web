import { useState, useEffect } from 'react';
import axios from 'axios';

export default function InputTodo() {
  const [inputTodo, setInputTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios({
        method: 'GET',
        url: 'http://localhost:8000/todos',
      });
      setTodoList(res.data.data);
    };
    getData();
  }, []);

  const AddTodo = async () => {
    const newTodo = {
      title: inputTodo,
      done: false,
    };

    const postData = async () => {
      const res = await axios({
        method: 'POST',
        url: 'http://localhost:8000/todo',
        data: newTodo,
      });
      setInputTodo('');
      setTodoList([...res.data, newTodo]);
    };

    postData();
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList.length]);
  // 체크박스 on/off
  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        console.log(todo.id === id);
        // console.log(todo);
        // 내가 체크한 박스의 id가 todos에 있는 id와 동일하다면 todo의 나머지 요소는 변하지 않고 checked요소만 반대로 해준다.
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  //   선택된 체크박스만 삭제
  const removeTodo = (id) => {
    const deleteData = async () => {
      const res = await axios({
        method: 'DELETE',
        url: `http://localhost:8000/todo/:${id}`,
        data: {
          id: Number(id),
        },
      });
      console.log('a');
    };
    deleteData();
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <>
      <input value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
      <button onClick={AddTodo}>추가</button>

      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <input type='checkbox' checked={todo.done} onChange={() => toggleTodo(todo.id)} />
              {todo.title}
              <button onClick={() => removeTodo(todo.id)}>DELETE</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
