import logo from './logo.svg';
import './App.css';

function App() {
  const flag = true;
  let txt = '';

  if (flag) {
    txt = 'true 입니다.';
  } else {
    txt = 'false 입니다.';
  }

  // react는 카멜케이스로 써줘야 한다.
  const styles = {
    margin: '0px',
  };
  const styleborder = {
    borderBottom: '1px solid black',
  };
  const test = {
    backgroundColor: 'beige',
    color: 'orange',
    fontSize: '24px',
    margin: '0px 20px 20px 20px',
    textAlign: 'center',
  };

  const name = '오월이';
  const animal = '강아지';
  const title = '리액트';
  return (
    <>
      {/* 스타일 태그는 객체형태로 들어가기 때문에 중괄호를 한번 더 써야 한다.
      {/* 자바스크립트를 넣고 싶을 때는 중괄호를 쓰고 써야 한다. */}
      {/* <h1 style={{ backgroundColor: 'black', color: 'white' }}>Hello React</h1>
      <div style={styles}>리액트 시작</div>
      <input></input>
      <div>{flag ? <h1>true입니다.</h1> : <h1>false입니다.</h1>}</div>
      <div>{txt}</div> */}

      {/* 실습 1 */}
      {/* <div>
        이것은 div입니다.
        <h3>이것은 div안에 있는 h3태그 입니다.</h3>
      </div>
      <div>{3 + 5 === 8 ? <h1>정답입니다.</h1> : <h1>오답입니다.</h1>}</div> */}

      {/* 실습 2 */}
      {/* <h2 style={styles}>
        제 반려 동물의 이름은 <span style={styleborder}>{name}</span>입니다.
      </h2>
      <br></br>
      <h2 style={styles}>
        <span style={styleborder}>{name}</span>는 <span style={styleborder}>{animal}</span>입니다.
      </h2> */}

      {/* 실습 3 */}
      {/* <div class='test' style={test}>
        {title}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        아이디 : <input></input>
      </div>
      <div style={{ textAlign: 'center' }}>
        비밀번호 : <input></input>
      </div> */}

      {/* 실습 4 */}

      <div class='red'></div>
      <div class='orange'></div>
      <div class='yellow'></div>
      <div class='green'></div>
      <div class='blue'></div>
      <div class='navy'></div>
      <div class='purple'></div>
    </>
  );
}

export default App;
