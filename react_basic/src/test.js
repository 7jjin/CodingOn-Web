import { Component } from 'react';

class Myname extends Component {
  render() {
    const name = '조진형';
    const my_style = {
      backgroundColor: 'blue',
      color: 'orange',
      fontSize: '40px',
      padding: '12px',
    };
    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}

export default Myname;
