import styled from 'styled-components';

// 기본 사용 방법
const _Boxone = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;

// props를 이용하는 방법
const _Boxtwo = styled.div`
  background-color: ${(props) => props.color};
  width: 150px;
  height: 100px;
`;

// 상속 받아서 이용하는 방법
const _Circle = styled(_Boxtwo)`
  /* background-color: ${(props) => props.color};
  width: 100px;
  height: 100px; */
  border-radius: 50%;
`;

// 기존태그를 이름만 바꿔서 사용하는 방법 => as 키워드 사용
const _Btn = styled.button`
  background-color: aqua;
  color: green;
  padding: 10px 15px;
  border-radius: 4px;
`;

// html태그에 옵션값 넣는 방법
const _Input = styled.input.attrs({ required: true })`
  background-color: yellow;
`;

// 중첩
const _Boxthree = styled.div`
  width: 200px;
  height: 200px;
  background-color: blueviolet;
  line-height: 200px;
  text-align: center;

  // 다른 컴포넌트를 불러와서 사용
  ${_Input} {
    background-color: red;
  }

  // pseudo
  p {
    color: white;
    font-weight: 700;
    &:hover {
      font-size: 30px;
    }
  }
`;

export default function StyledComponent() {
  return (
    <div>
      {/* 컴포넌트의 props값도 사용할 수 있고 이벤트 사용도 할 수 있다. */}
      <_Boxthree
        onClick={() => {
          alert('이벤트입니다.');
        }}
      >
        <p>Hello Styled</p>
        <_Input></_Input>
      </_Boxthree>
      {/* <_Boxone></_Boxone> */}
      {/* <_Boxtwo color={'red'}></_Boxtwo>
      <_Boxtwo color={'orange'}></_Boxtwo>
      <_Circle color={'green'}></_Circle> */}
      {/* <_Btn>클릭</_Btn>
      <_Btn as='a' href='https://naver.com'>
        a태그
      </_Btn>
      <_Btn as='h1'>안녕하세요</_Btn> */}
      <_Input></_Input>
      <_Input></_Input>
      <_Input></_Input>
    </div>
  );
}
