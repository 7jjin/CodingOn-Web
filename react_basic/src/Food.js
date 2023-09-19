import { Component } from 'react'; // 1번 방법

class Food extends Component {
  render() {
    return (
      <>
        <h1>
          저는
          <span style={{ color: 'red' }}>{this.props.food}</span>를 좋아합니다.
        </h1>
      </>
    );
  }
}

Food.defaultProps = {
  food: '고구마',
};

export default Food;
