import { Component } from 'react';
class ShowButton extends Component {
  state = {
    write: '보여라',
    h1Tag: '',
  };

  handleShow = () => {
    if (this.state.write === '보여라') {
      this.setState(() => {
        return { write: '사라져라', h1Tag: '안녕하세요' };
      });
    } else {
      this.setState(() => {
        return { write: '보여라', h1Tag: '' };
      });
    }
  };
  render() {
    return (
      <>
        <button onClick={this.handleShow}>{this.state.write}</button>
        <h1>{this.state.h1Tag}</h1>
      </>
    );
  }
}

export default ShowButton;
