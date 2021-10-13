import styled from 'styled-components';

const VideoWrap = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  .controls-progress {
    opacity: 0;
  }
  .controls-wrap {
    opacity: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 66%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  .controls {
    transform: translateY(64px);
  }
  &.config-menu-show {
    .config-menu {
      opacity: 1;
      transform: translateY(0);
    }
  }
  &:hover,
  &.paused {
    .controls-progress {
      opacity: 1;
    }
    .controls-wrap {
      opacity: 1;
    }
    .controls {
      transform: translateY(0);
      z-index: 10;
    }
  }
  video {
    width: 100%;
  }
  &.touch {
    padding-bottom: 10px;
    &:hover {
      .controls-wrap {
        opacity: 0;
      }
    }
    .controls-wrap {
      opacity: 0;
    }
    &.show {
      .controls-wrap {
        opacity: 1;
        background: rgba(0, 0, 0, 0.3);
      }
    }
    .controls {
      transform: translateY(-8px);
    }
  }
`;

export default VideoWrap;
