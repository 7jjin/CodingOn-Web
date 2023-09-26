import BoardSearch from './09Ref/RefPractice1';
import RefSampleFunc1 from './09Ref/RefPractice2';
import RefSampleClass1 from './09Ref/RefSampleClass1';
import RefSampleClass2 from './09Ref/RefSampleClass2';
import RefSampleFunc2 from './09Ref/RefSampleFunc2';
import RefPractice3 from './09Ref/RefPractice3';
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

import { useEffect, useState, useCallback } from 'react';
import UseMemo from './10Hook/useMemo';
import Count from './10Hook/useReducer';
import UseCallbackComponent from './10Hook/useCallback';
import SignupForm from './10Hook/useReducerPractice';
import Style from './11Style/Style';
import SassComponent from './11Style/SassComponent';
import SassBug from './11Style/Sassbug';
import SassCircle from './11Style/SassCircle';

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
      {/* <BoardSearch></BoardSearch> */}
      {/* <RefSampleFunc1></RefSampleFunc1> */}
      {/* <RefSampleFunc2></RefSampleFunc2> */}
      {/* <RefPractice3></RefPractice3> */}
      {/* <UseMemo></UseMemo> */}
      {/* <UseCallbackComponent></UseCallbackComponent> */}
      {/* <Count></Count> */}
      {/* <SignupForm></SignupForm> */}
      {/* <Style></Style> */}
      {/* <SassComponent></SassComponent> */}
      {/* <SassBug></SassBug> */}
      <SassCircle></SassCircle>
    </>
  );
}

export default App;
