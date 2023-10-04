import { createContext, useState } from 'react';

// Context 생성
// createContext() : Provider와 Consumer 두개의 리액트 컴포넌트를 반환
const MyContext = createContext({
  // 타입을 써줘야 한다.
  language: '',
  abc: 0,
  setLanguage: () => {},
});

// provider
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('jp');

  return <MyContext.Provider value={{ language, setLanguage }}>{children}</MyContext.Provider>;
}

export default MyContext;
