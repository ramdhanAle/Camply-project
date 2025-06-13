import styled from "styled-components";

const IconInput = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 12px;
  width: 100%;
  max-width: 560px;
  border: 2px solid ${(props) => props.theme.colors["neuralDarkest"]};
  border-radius: 12px;

  input {
    border: none;
    width: 100%;
    background: transparent;
    font-size: 16px;
    font-weight: 400;
  }

  input:focus {
    border: none;
    outline: none;
  }
`;

export default IconInput;
