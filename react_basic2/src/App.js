import BoardSearch from './09Ref/RefPractice1';
import RefSampleClass1 from './09Ref/RefSampleClass1';
import RefSampleClass2 from './09Ref/RefSampleClass2';
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
      {/* <button onClick={removeComponent}>연결해제</button>
      {status && <UpdateList></UpdateList>} */}
      {/* <RefSampleClass1></RefSampleClass1> */}
      {/* <RefSampleClass2></RefSampleClass2> */}
      <BoardSearch></BoardSearch>
    </>
  );
}

export default App;
