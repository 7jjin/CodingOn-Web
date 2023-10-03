import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughBeam } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

import tongLogo from './tong.png';

const _imgBox = styled.img`
  width: 100%;
  margin-top: 20%;
`;

export default function emptyList() {
  return (
    <>
      <div>
        <_imgBox src={tongLogo} />
      </div>
    </>
  );
}
