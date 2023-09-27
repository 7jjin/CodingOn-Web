import { useState } from 'react';
import styled from 'styled-components';

// export default function StyledPractice() {
//   const [status, setStatus] = useState({
//     back: 'blue',
//     color: 'white',
//   });
//   const _StyledBtn = styled.button`
//     background-color: ${status.blue};
//     color: ${status.color};
//   `;

//   const handleEvent = (e) => {
//     if (status.back === 'blue' && status.color === 'white') {
//       setStatus({
//         back: 'red',
//         color: 'black',
//       });
//     } else {
//       setStatus({
//         back: 'blue',
//         color: 'white',
//       });
//     }
//   };
//   return (
//     <div>
//       <_StyledBtn onclick={handleEvent}>색상변경</_StyledBtn>
//     </div>
//   );
// }

const _StyleButton = styled.button`
  background-color: ${(props) => (props.isclicked ? 'red' : 'blue')};
  color: ${(props) => (props.isclicked ? 'black' : 'white')};
  padding: 10px;
  cursor: pointer;
`;

export default function StyledPrac3() {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <_StyleButton onClick={onClick} isClicked={isClicked}>
        색상변경
      </_StyleButton>
    </>
  );
}
