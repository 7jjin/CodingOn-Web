import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from './store/counter';

export default function Counter() {
  const counter = useSelector((state) => state.count.counter);
  console.log(counter);
  const dispatch = useDispatch();

  const add = () => {
    dispatch(counterAction.increment());
  };
  const minus = () => {
    dispatch(counterAction.decrement());
  };
  const calc = () => {
    dispatch(counterAction.calc({ plus: 5, minus: 1 }));
  };
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={calc}>CALC</button>
    </div>
  );
}
