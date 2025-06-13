import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  max-width: 560px;
  height: 40px;
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.colors["neutralDarkest"]};
  padding: 8px 12px;
  background-color: transparent;
  font-size: 16px;
  font-weight: 400;

  &:focus {
    outline: none;
  }
`;

export default Input;
