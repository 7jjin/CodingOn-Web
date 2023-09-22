import { useState } from 'react';

export default function ToggleShow() {
  const [status, setStatus] = useState({
    button: '사라져라',
    text: '안녕하세요',
  });

  const handleShow = () => {
    if (status.button === '사라져라') {
      setStatus({
        button: '보여라',
        text: '',
      });
    } else {
      setStatus({
        button: '사라져라',
        text: '안녕하세요',
      });
    }
  };

  return (
    <div>
      <button onClick={handleShow}>{status.button}</button>
      <h1>{status.text}</h1>
    </div>
  );
}
