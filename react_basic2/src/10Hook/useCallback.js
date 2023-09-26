import { useState, useCallback } from 'react';

function ChildComponent({ onClick }) {
  console.log('Child Component');
  return (
    <>
      <button onClick={onClick}>PLUS</button>
    </>
  );
}

export default function useCallbackComponent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // useCallback 미사용
  const plusCount = () => {
    console.log('plusCount', count);
    setCount(() => count + 1);
  };

  // useCallback 사용
  // 이 함수에 있는 count 값은 변하지 않는다.
  // 복잡한 로직의 코드가 리턴값이 있을 때 useCallback을 사용한다.
  // 처음 랜더링 될 때 함수가 실해되고 그 다음부터는 함수가 작동 안된다.
  // 반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸줘서 함수를 메모이제이션
  const plusCountCallback = useCallback(() => {
    console.log('plusCountCallback', count);
    setCount(() => count + 1);
  }, []);

  const onChange = (e) => {
    setInputValue(e.target.value);
    plusCount();
  };

  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <ChildComponent onClick={plusCountCallback} />
      <p>{count}</p>
    </>
  );
}
