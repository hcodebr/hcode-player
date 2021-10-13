import styled from 'styled-components';

const LeftControls = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &.touch {
    .playOrPause {
      display: none;
    }
  }
`;

export default LeftControls;
