import { useContext } from 'react';
import ModeContext from './store/mode-context';

export default function ModeSelector() {
  const value = useContext(ModeContext);
  return (
    <>
      {value.mode === 'dark' ? (
        <div style={{ backgroundColor: 'black' }}>
          <h2 style={{ color: 'white' }}>현재 테마:{value.mode}</h2>
          <select value={value.mode} onChange={(e) => value.setMode(e.target.value)}>
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
      ) : (
        <div>
          <h2>현재 테마:{value.mode}</h2>
          <select value={value.mode} onChange={(e) => value.setMode(e.target.value)}>
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
      )}
    </>
  );
}
