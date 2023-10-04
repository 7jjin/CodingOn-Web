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
import StyledComponent from './11Style/StyledComponent';
import StyledPractice from './11Style/StyledPractice';
import StyledPrac3 from './11Style/StyledPractice';
import StyledPrac4 from './11Style/StyledPrac4';
// import Router from './12Router/Router';
import Header from './12Router/Header';
import { Outlet } from 'react-router-dom';
import PR_navbar from './12Router/PR_navbar';
import RouterPrac1 from './12Router/PR_router';
import Form from './13Form/Form';
import FormPractice from './13Form/FormPractice';
import MyContext from './14Context/store/lang-context';
import LanguageSelector from './14Context/LangSelector';

function App() {
  const [status, setState] = useState(true);
  const removeComponent = () => {
    setState(!status);
  };

  const [language, setLanguage] = useState('ko');
  return (
    <>
      <MyContext.Provider value={{ language: language, setLanguage: setLanguage }}>
        <LanguageSelector />
      </MyContext.Provider>
    </>
  );
}

export default App;
