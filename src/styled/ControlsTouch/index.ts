import styled from 'styled-components';

const ControlsTouch = styled.div`
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: calc(100% - 54px);
  z-index: 3;
  &.touch {
    opacity: 0;
    justify-content: center;
    align-items: center;
    button {
      svg {
        width: 64px;
        height: 64px;
        color: #fff;
      }
    }
    &.show {
      display: flex;
      opacity: 1;
    }
  }
`;

export default ControlsTouch;
