import styled from 'styled-components';

const VolumeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .slider-wrap {
    overflow: hidden;
    width: 0;
    display: flex;
    align-items: center;
    min-height: 64px;
  }
  &:hover {
    .slider-wrap {
      padding: 0 20px;
      width: 140px;
    }
  }
  &.touch {
    display: none;
  }
`;

export default VolumeWrap;
