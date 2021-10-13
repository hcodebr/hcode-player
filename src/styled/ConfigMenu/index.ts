import styled from 'styled-components';

const ConfigMenu = styled.div`
  position: absolute;
  bottom: 32px;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  min-width: 220px;
  transform: translateY(200px);
  .MuiListItem-button {
    text-align: right;
  }
  svg {
    color: #fff;
  }
  .MuiTypography-colorTextSecondary {
    color: #fff;
    font-size: 12px;
  }
`;

export default ConfigMenu;
