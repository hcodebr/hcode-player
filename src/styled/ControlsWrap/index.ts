import styled from 'styled-components';

const ControlsWrap = styled.div`
  transition: all 0.2s ease-in-out;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: -4px;
  z-index: 2;
  height: 100%;
  &.touch {
    height: calc(100% - 10px);
    button {
      svg {
        width: 64px;
        height: 64px;
        color: #fff;
      }
    }
  }
`;

export default ControlsWrap;
