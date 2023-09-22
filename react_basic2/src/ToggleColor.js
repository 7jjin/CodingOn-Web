import { useState } from 'react';

export default function ToggleColor() {
  const [status, setStatus] = useState('검정색 글씨');
  const [color, setColor] = useState('black');

  const redToggle = () => {
    setStatus('빨간색 글씨');
    setColor('red');
  };

  const blueToggle = () => {
    setStatus('파란색 글씨');
    setColor('blue');
  };
  return (
    <div>
      <h1 style={{ color }}>{status}</h1>
      <button onClick={redToggle}>빨간색</button>
      <button onClick={blueToggle}>파란색</button>
    </div>
  );
}
