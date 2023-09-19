import { Component } from 'react';

class EventPractice extends Component {
  handleClick = (message) => {
    alert(message);
  };

  render() {
    return (
      <>
        <button
          onClick={(e) => {
            this.handleClick(this.props.message);
          }}
        >
          Show Message
        </button>
      </>
    );
  }
}

export default EventPractice;
