import { Component } from 'react'; // 1번 방법
// import React from 'react'; // 2번 방법

// class형 컴포넌트
// class 컴포넌트명 extends Component{}     // 1번 방법
// class ClassComponent extends React.Component{}   // 2번 방법
class ClassComponent extends Component {
  // 클래스형 컴포넌트에서는 render 함수는 필수
  render() {
    const name = '홍길동';
    return (
      <>
        <h1>Hello {name}</h1>
        <p>여기는 클래스형 컴포넌트</p>
      </>
    );
  }
}

export default ClassComponent;
