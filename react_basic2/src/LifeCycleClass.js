import { Component } from 'react';

class MyComponent extends Component {
  // 생성될 떄
  componentDidMount() {
    console.log('Mount!');
  }
  // 업데이트 될때
  componentDidUpdate() {
    console.log('Update');
  }
  // 제거될 때
  componentWillUnmount() {
    console.log('Unmount!');
  }
  render() {
    return (
      <>
        <div> My Component{this.props.number}</div>
      </>
    );
  }
}

class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>ON/OFF</button>
        {this.state.visible && <MyComponent number={this.state.number}></MyComponent>}
      </>
    );
  }
}

export default LifeCycleClass;
