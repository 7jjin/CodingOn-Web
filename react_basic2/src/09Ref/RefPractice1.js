import React, { Component } from 'react';

class BoardSearch extends Component {
  constructor(props) {
    super(props);

    //초기화
    this.state = {
      inputWriter: '', //작성자
      inputTitle: '', //제목
      comments: [], //입력한 내용
      inputSearch: '', //검색내용
      searchType: 'title', //검색타입
      results: [], //검색결과
    };

    this.onChange = this.onChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.searchComment = this.searchComment.bind(this);
  }

  myWriter = React.createRef();
  myTitle = React.createRef();

  onChange(event) {
    this.setState({ inputWriter: event.target.value });
  }

  addComment() {
    // ref 연습문제 코드 추가
    // 에러: 빈문자열을 넣으면 추가가 된다.
    // 해결: this.state.inputWriter.trim() ==="" 으로 공백을 제거해주면 된다.
    if (this.state.inputWriter && this.state.inputTitle) {
      const newComment = {
        writer: this.state.inputWriter,
        title: this.state.inputTitle,
      };
      this.setState(() => ({ comments: [...this.state.comments, newComment], inputTitle: '', inputWriter: '' }));
    } else if (this.state.inputWriter && !this.state.inputTitle) {
      this.myTitle.current.focus();
    } else if (!this.state.inputWriter && this.state.inputTitle) {
      this.myWriter.current.focus();
    } else {
      this.myWriter.current.focus();
    }
  }

  searchComment() {
    const searchResult = this.state.comments.filter((value) => {
      // console.log(value);
      console.log(value[this.state.searchType]);
      const type = value[this.state.searchType];
      const include = type.includes(this.state.inputSearch);
      if (!include) {
        return false;
      }
      return true;
    });
    this.setState({ results: searchResult });
  }

  render() {
    const { inputWriter, inputTitle, comments, searchType, inputSearch, results } = this.state;
    return (
      <>
        <form>
          <label htmlFor='writer'>작성자:</label>
          <input id='writer' type='text' ref={this.myWriter} value={inputWriter} onChange={(e) => this.onChange(e)} />
          <label htmlFor='title'>제목:</label>
          <input
            id='title'
            type='text'
            value={inputTitle}
            ref={this.myTitle}
            onChange={(e) => this.setState({ inputTitle: e.target.value })}
          />
          <button type='button' onClick={this.addComment}>
            작성
          </button>
        </form>
        <form>
          {/* onChange: input, textarea, select 값이 변경될때마다 발생하는 이벤트 핸들러 */}
          <select value={searchType} onChange={(e) => this.setState({ searchType: e.target.value })}>
            <option value='writer'>작성자</option>
            <option value='title'>제목</option>
          </select>
          <input
            type='text'
            placeholder='검색어'
            value={inputSearch}
            onChange={(e) => this.setState({ inputSearch: e.target.value })}
          />
          <button type='button' onClick={this.searchComment}>
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
            {comments.map((value, index) => {
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
        <h4>검색결과</h4>
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
      </>
    );
  }
}

export default BoardSearch;
