import styled from "styled-components";

const StyledAuthForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 112px 0;

  .form-card {
    width: 480px;
  }
  
  h1 {
    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 32px 0 24px;
  }

  form div.separator {
    padding: 16px 0;
  
  }

  form div.separator .hr {
    height: 1px;
    background-color: ${(props) => props.theme.colors['neutralDarkest']};
  }
`;

export default StyledAuthForm;