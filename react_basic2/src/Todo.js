import { useState } from 'react';

export default function Todo() {
  const [status, setStatus] = useState({
    write: '',
    list: [],
  });
  const [number, setNumber] = useState(0);

  const addList = () => {
    const newList = {
      write: status.write,
    };
    setStatus(() => ({ ...status, list: [...status.list, newList], write: '' }));
    setNumber(number + 1);
  };

  const { write, list } = status;
  return (
    <>
      <form>
        <input
          placeholder='할 일 입력...'
          value={write}
          onChange={(e) => setStatus({ ...status, write: e.target.value })}
        ></input>
        <button type='button' onClick={addList}>
          추가
        </button>
      </form>

      <ul>
        {list.map((item) => {
          return (
            <li key={number}>
              <div>
                <input type='checkbox' id={number}></input>
                <label htmlFor={number}>{item.write}</label>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
