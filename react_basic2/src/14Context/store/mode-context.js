import { createContext, useState } from 'react';

const ModeContext = createContext({
  mode: '',
  setMode: () => {},
});

export function ModeProvider({ children }) {
  const [mode, setMode] = useState('light');

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
}

export default ModeContext;
