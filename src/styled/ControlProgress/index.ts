import styled from 'styled-components';

const ControlProgress = styled.div`
  position: absolute;
  min-height: 96px;
  width: calc(100% - 40px);
  padding: 10px 20px;
  bottom: 0;
  z-index: 10;
  > span {
    position: absolute;
    z-index: 5;
    width: calc(100% - 40px);
  }
  > div {
    position: absolute;
    width: calc(100% - 40px);
    top: 22px;
    z-index: 4;
  }
  &.touch {
    min-height: initial;
    width: 100%;
    padding: 0;
    bottom: 35px;
    > span {
      width: 100%;
      .MuiSlider-track {
        z-index: 2;
      }
    }
    > div {
      width: 100%;
      top: 19px;
      height: 4px;
    }
  }
`;

export default ControlProgress;
