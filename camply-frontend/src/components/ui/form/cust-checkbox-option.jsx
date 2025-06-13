import styled from "styled-components";

const OptionButton = styled.button`
  transition: all ease-in-out 0.2s;
  padding: 10px 20px;
  border: 2px solid #000;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.neutralDarkest : "#fff"};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  font-weight: 500;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  ${({ theme, selected }) =>
    selected && `border-color: ${theme.colors.neutralDarkest};`}
`;

export default OptionButton;
