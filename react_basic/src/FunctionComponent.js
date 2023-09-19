import PropTypes from 'prop-types';

// 함수형 컴포넌트
// function 컴포넌트명 or const 컴포넌트명 = () =>{}
function FuncionComponent() {
  const myClass = 'kdt9';
  return (
    <>
      <h1>반갑습니다. {myClass}에 오신것을 환영합니다.</h1>
      <p>여기는 함수형 컴포넌트</p>
    </>
  );
}

function FunctionBug(props) {
  // 객체구조분해할당
  // function FunctionBug({ myClass }) {
  const myClass = 'kdt9';
  return (
    <>
      {/* <div className='wrapper'>
        <div className='circle1'>
          <div className='eye_white'>
            <div className='eye_black'></div>
          </div>
        </div>
        <div className='circle2'></div>
        <div className='circle3'></div>
        <div className='circle4'></div> */}
      {/* <img src='../img/pngwing.com.png' alt='풀숲' width='450px' height='100px' /> */}
      {/* <div className='circle5'></div>
      </div> */}
      <h1>Hello {myClass}</h1>
      <h2>안녕하세요 {myClass}</h2>
      <h2>나이는 입니다.</h2>
      <p>여기는 클래스형 컴포넌트</p>
      <h2>{props.children}</h2>
    </>
  );
}

FunctionBug.defaultProps = {
  myClass: 'kdt9',
};
FunctionBug.propTypes = {
  myClass: PropTypes.string,
};

export { FuncionComponent, FunctionBug };
