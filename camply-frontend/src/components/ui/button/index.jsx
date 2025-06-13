import styled, { css } from 'styled-components';

const Button = styled.button`
  border-width: 2px 2px 4px 2px;
  border-color: #000;
  border-radius: 12px;
  color: #000;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all .1s ease-in-out;
  display: inline-block;
  text-decoration: none;
  padding: 10px 24px;

  // props variant
  // background-color: ${(props) => props.theme.colors[props.variant] || props.theme.colors["primary"]};
  // &:hover{
  //   background-color: ${(props) => props.theme.hover[props.variant] || props.theme.hover["primary"]};
  //   text-decoration: underline;
  // }
  
  background-color: transparent;
  &:hover{
    transform: translateY(-2px);
  }

  &:active{
    transform: translateY(2px);
  }

  // Props Size
   ${({ $small }) => $small && css`
    padding: 8px 20px;
  `}

   ${({ $extraSmall }) => $extraSmall && css`
    padding: 4px 10px;
    border-radius: 6px;
  `}
  
  // Props Full
  ${({ $full }) => $full && css`
    display: block;
    width: 100%;
    text-align: center;
  `}
`;

export default Button;