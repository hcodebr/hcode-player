import styled from 'styled-components';

const Controls = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  width: 100%;
  bottom: 0;
  z-index: 3;
  color: #fff;
  .MuiIconButton-root {
    color: #fff;
  }
  button {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.25);
    }
    &::active,
    &:focus {
      transform: scale(1.1);
    }
  }
  &.touch {
    opacity: 0;
    &.show {
      opacity: 1;
    }
  }
`;

export default Controls;
