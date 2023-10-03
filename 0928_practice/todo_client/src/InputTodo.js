import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EmptyList from './EmptyList';

//styled-component
const _wrapperBox = styled.div`
  margin: 0 auto;
  width: 35%;
  background-color: white;
  height: 100%;
`;

const _styledHeader = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  align-items: center;
  background-color: skyblue;
  color: white;
`;

const _styledInput = styled.input`
  border: none;
  border-bottom: 2px solid skyblue;
  padding-bottom: 5px;
  width: 85%;
  outline: none;
  margin-right: 20px;
  margin-left: 7px;
`;

const _addButton = styled.button`
  width: 6%;
  border: none;
  background-color: #eee;
  border-radius: 5px;
`;

const _inputDiv = styled.div`
  margin-top: 20px;
  display: flex;
  padding: 10px;
`;

const _todoLengthDiv = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const _ulTag = styled.ul`
  list-style: none;
  padding: 0px 10px;
  margin: 0px;
`;

const _liTag = styled.li`
  display: flex;
  margin-bottom: 20px;
`;

export default function InputTodo() {
  const [inputTodo, setInputTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const inputWriter = useRef();
  const updateInput = useRef([]);

  // 처음 실행시 모든 데이터 불러오기
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

  // 할일 추가 함수
  const AddTodo = async () => {
    // 빈값이 아닐 떄만 추가
    if (inputTodo !== '') {
      const newTodo = {
        title: inputTodo,
        done: false,
      };
      setInputTodo('');

      const postData = async () => {
        const res = await axios({
          method: 'POST',
          url: 'http://localhost:8000/todo',
          data: newTodo,
        });
        // 여기서 자꾸 리스트가 업데이트 안돼는 오류가 있었는데 알고 보니 컨트롤러에서 데이터를 안넘겨주고 있었음... 실환가..
        setTodoList([...todoList, res.data.data]);
      };

      postData();
    } else {
      // 빈값이면 input에 포커스 하기
      inputWriter.current.focus();
    }
  };

  // 체크박스 on/off
  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        // 내가 체크한 박스의 id가 todos에 있는 id와 동일하다면 todo의 나머지 요소는 변하지 않고 checked요소만 반대로 해준다.
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
    // updateInput.id.current.focus();
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
      // 여기는 왜 res.data로 받아야 하고 위에 모든 데이터를 가져올 때는 res.data.data를 가져와야 하지..
      setTodoList(res.data);
    };
    deleteData();
  };

  // 수정된 리스트 업데이트 해주는 함수
  const updateTodoTitle = async (id, newTitle) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  // 엔터키 눌렀을 때 수정사항 업데이트
  const handleInputKeyDown = async (e, id, newTitle) => {
    if (e.key === 'Enter') {
      const res = await axios({
        method: 'PATCH',
        url: `http://localhost:8000/todo/:${id}`,
        data: {
          title: newTitle,
          id: Number(id),
        },
      });
      setTodoList(
        todoList.map((todo) => {
          return todo.id === id ? { ...todo, done: false } : todo;
        })
      );
      alert('업데이트 되었습니다.');
      inputWriter.current.focus();
    }
  };

  return (
    <_wrapperBox>
      <_styledHeader>My Todo App🔥</_styledHeader>

      <_inputDiv>
        <_styledInput
          ref={inputWriter}
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          placeholder='Add Todo here'
        />
        <_addButton onClick={AddTodo}>
          <FontAwesomeIcon icon={faPlus} />
        </_addButton>
      </_inputDiv>

      <_todoLengthDiv>✏️{todoList.length} Todos</_todoLengthDiv>
      {todoList.length !== 0 ? (
        <_ulTag>
          {todoList.map((todo) => {
            return (
              <_liTag key={todo.id}>
                <input type='checkbox' checked={todo.done} onChange={() => toggleTodo(todo.id)} />
                {todo.done === true ? (
                  <_styledInput
                    type='text'
                    value={todo.title}
                    ref={(value) => (updateInput.current[todo.id] = value)}
                    onChange={(e) => updateTodoTitle(todo.id, e.target.value)}
                    onKeyDown={(e) => handleInputKeyDown(e, todo.id, e.target.value)}
                  />
                ) : (
                  <_styledInput type='text' value={todo.title} readOnly />
                )}
                <_addButton onClick={() => removeTodo(todo.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </_addButton>
              </_liTag>
            );
          })}
        </_ulTag>
      ) : (
        <EmptyList />
      )}
    </_wrapperBox>
  );
}
