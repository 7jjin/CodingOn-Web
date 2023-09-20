import { Component } from 'react';

class ColorButton extends Component {
  state = {
    write: '검정색 글씨',
    color: 'black',
  };

  handleEventRed = () => {
    this.setState(() => {
      return { write: '빨간색 글씨', color: 'red' };
    });
  };
  handleEventBlue = () => {
    this.setState(() => {
      return { write: '파란색 글씨', color: 'blue' };
    });
  };
  render() {
    return (
      <>
        <h1 style={{ color: this.state.color }}>{this.state.write}</h1>
        <button onClick={this.handleEventRed}>빨간색</button>
        <button onClick={this.handleEventBlue}>파란색</button>
      </>
    );
  }
}

export default ColorButton;
