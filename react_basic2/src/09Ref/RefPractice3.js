import { useState, useRef } from 'react';

export default function Board() {
  const [input, setInput] = useState({
    writer: '',
    title: '',
    list: [],
    inputSearch: '', //검색내용
    searchType: 'title', // 검색타입
    results: [], // 검색결과
  });

  const inputWriter = useRef();
  const inputTitle = useRef();

  const addList = () => {
    if (inputWriter.trim() === '') {
      inputWriter.current.focus();
      return false;
    }

    if (inputTitle.trim() === '') {
      inputTitle.current.focus();
      return false;
    }

    const newList = {
      writer: input.writer,
      title: input.title,
    };
    setInput(() => ({ ...input, list: [...input.list, newList], writer: '', title: '' }));
  };

  const searchComment = () => {
    const searchResult = input.list.filter((value) => {
      const type = value[input.searchType];
      const include = type.includes(input.inputSearch);
      if (!include) {
        return false;
      }
      return true;
    });
    console.log(searchResult);
    setInput({ ...input, results: searchResult });
  };

  const { writer, title, list, inputSearch, searchType, results } = input;

  return (
    <div>
      <form>
        <label htmlFor='writer'>작성자:</label>
        <input
          ref={inputWriter}
          id='writer'
          type='text'
          value={input.writer}
          onChange={(e) => setInput({ ...input, writer: e.target.value })}
        ></input>
        <label htmlFor='title'>제목:</label>
        <input
          ref={inputTitle}
          id='title'
          type='text'
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        ></input>
        <button type='button' onClick={addList}>
          작성
        </button>
      </form>

      <form>
        {/* onChange: input,textarea,select 값이 변경될 때마다 발생하는 이벤트 핸들러 */}
        <select value={searchType} onChange={(e) => setInput({ ...input, searchType: e.target.value })}>
          <option value='writer'>작성자</option>
          <option value='title'>제목</option>
        </select>
        <input
          type='text'
          placeholder='검색어'
          value={inputSearch}
          onChange={(e) => setInput({ ...input, inputSearch: e.target.value })}
        ></input>
        <button type='button' onClick={searchComment}>
          검색
        </button>
      </form>

      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {list.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table border={1} cellSpacing={0}>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {results.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.title}</td>
                <td>{value.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
