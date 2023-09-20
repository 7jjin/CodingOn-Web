import { Component } from 'react';
class Counter extends Component {
  //   constructor(props) {
  //     //부모 클래스인 Component의 생성자 호출
  //     super(props);

  //     this.state = {
  //       number: 0,
  //     };
  //     // 바인딩
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  state = {
    number: 0,
  };

  handleIncrement() {
    this.setState({ number: this.state.number + 1 });
    console.log(this);
  }

  handleDecrement = () => {
    // setState는 호출 직후의 상태가 바로 업데이트 되지 않는다.
    // 리액트는 여러 setState 호춯을 일괄 처리.
    // 2번의 setStae가 1번의 setState의 결과를 기반으로 동작하지 않는다.
    // this.setState({ number: this.state.number - 1 }); // ---- 1번
    // this.setState({ number: this.state.number - 1 }); // ---- 2번

    this.setState((prevState) => {
      return { number: prevState.number - 1 };
    });
    // 위아래 같은 코드
    this.setState((prevState) => ({ number: prevState.number - 1 }));

    console.log('감소함수', this);
  };

  render() {
    return (
      <>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>감소</button>
      </>
    );
  }
}

export default Counter;
