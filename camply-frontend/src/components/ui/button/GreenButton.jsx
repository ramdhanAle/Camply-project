import styled, { css } from 'styled-components';
import Button from '.';

const GreenButton = styled(Button)`

  background-color: ${(props) => props.theme.colors['thatchGreen']};
  color: #fff;

`;

export default GreenButton;