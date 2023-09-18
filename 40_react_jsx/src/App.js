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

  // const name = '오월이';
  // const animal = '강아지';
  // const title = '리액트';

  // map함수
  const lists = ['k', 'd', 't', 'w', 'e', 'b'];
  const animal = ['dog', 'cat', 'rabbit'];
  const newAnimal = animal.filter((value) => {
    return value.length > 3;
  });
  console.log(newAnimal);

  // 단축평가
  // &&연산자
  const result = false && 'hello';
  console.log(result);
  // ||연산자
  const defaultValue = 1000;
  const price = 1500;
  const dbPrice = price || defaultValue;

  // 실습 5
  const users = [
    { id: 1, name: 'Jone', age: 25, vip: true },
    { id: 2, name: 'Jane', age: 19, vip: false },
    { id: 3, name: 'Alice', age: 30, vip: true },
    { id: 4, name: 'Bob', age: 18, vip: false },
    { id: 5, name: 'Charlie', age: 35, vip: true },
  ];

  const newusers = users.filter((item) => {
    return item.vip;
  });
  console.log(newusers);
  const isLogin = true;

  return (
    <>
      {isLogin && (
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
          {/* <div className='test' style={test}>
        {title}
      </div>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        아이디 : <input></input>
      </div>
      <div style={{ textAlign: 'center' }}>
        비밀번호 : <input></input>
      </div> */}
          {/* 실습 4 */}
          {/* <div class='red'></div>
      <div class='orange'></div>
      <div class='yellow'></div>
      <div class='green'></div>
      <div class='blue'></div>
      <div class='navy'></div>
      <div class='purple'></div> */}
          {/* {lists.map((value, index) => {
        return <div key={index}>Hello {value}</div>;
      })}
      {users.map((value,index)=>{

      })} */}
          {/* {users.filter((item) => {
        return <div key={item.id}>{item.vip === true}</div>;
      })} */}

          {newusers.map((value) => {
            <div key={value.id}>{value.name}</div>;
          })}
        </>
      )}
    </>
  );
}

export default App;

// return문 아래에 js를 쓰려면 {} 중괄호를 쓰고 사용해야 한다.
// react에서는 if문 대신 삼항 연산자를 주로 사용한다.
// style을 직접 주고 싶을 때는 style= {{color: "red"}} 처럼 중괄호를 두번쓰고 할당 해줘야 한다.
// 모든 리액트 변수는 카멜케이스로 만들어 줘야 한다.
// 반복문(map)의 최상단 DOM요소에는 고유한 키(key)값을 넣어줘야 한다.
