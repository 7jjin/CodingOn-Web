import styled from 'styled-components';
import { useState } from 'react';

const _input = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const _Button = styled.button`
  padding: 10px 15px;
  background-color: skyblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    opacity: 0.8;
  }
`;

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const _List = styled.ul`
  width: 300px;
  height: 200px;
  overflow-y: scroll;
  padding: 0px;
`;

const _Li = styled.li`
  padding: 5px;
  border-bottom: 1px solid black;
`;

export default function StyledPrac4() {
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const onClick = () => {
    if (inputValue !== '') {
      setList([...list, inputValue]);
      setInputValue('');
    }
  };
  return (
    <_Container>
      <div>
        <_input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <_Button onClick={onClick}>Add</_Button>
        <_List>
          {list.map((value, index) => {
            return <_Li key={index}>{value}</_Li>;
          })}
        </_List>
      </div>
    </_Container>
  );
}
