import Board from './Board';
import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import PostList from './PostList';
import Todo from './Todo';
import TodoMartin from './TodoMartin';
import ToggleColor from './ToggleColor';
import ToggleFunc from './ToggleFunc';
import ToggleShow from './ToggleShow';
import UpdateList from './UpdateList';
import { useEffect, useState } from 'react';

function App() {
  const [status, setState] = useState(true);
  const removeComponent = () => {
    setState(!status);
  };

  return (
    <>
      {/* <ToggleFunc></ToggleFunc> */}
      {/* <ToggleColor></ToggleColor> */}
      {/* <ToggleShow></ToggleShow> */}
      {/* <Board></Board> */}
      {/* <Todo></Todo> */}
      {/* <TodoMartin></TodoMartin> */}
      {/* <LifeCycleClass></LifeCycleClass> */}
      {/* <LifeCycleFunc></LifeCycleFunc> */}
      {/* <PostList></PostList> */}
      <button onClick={removeComponent}>연결해제</button>
      {status && <UpdateList></UpdateList>}
    </>
  );
}

export default App;
