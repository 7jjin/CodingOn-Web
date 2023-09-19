import { Component } from 'react'; // 1번 방법
import gulee from './gulee.jpg';

class myImg extends Component {
  render() {
    const style = {
      color: 'orange',
      fontSize: '40px',
      marginTop: '20px',
    };
    return (
      <>
        <div style={style}>
          <h2>안녕하세요</h2>
          <img src={gulee}></img>
        </div>
      </>
    );
  }
}
export default myImg;
