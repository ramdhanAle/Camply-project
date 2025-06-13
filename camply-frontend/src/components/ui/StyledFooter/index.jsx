import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 80px 64px;
  font-size: 14px;

  a {
    text-decoration: none;
  }

  .top-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }

  .top-footer ul {
    display: flex;
    gap: 32px;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }

  .bot-footer {
    border-top: 2px solid ${(props) => props.theme.colors['neutralDarkest']};
    padding-top: 32px;
    margin-top: 80px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .bot-footer ul {
    display: flex;
    gap: 24px;
    justify-content: start;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 80px 20px;
  }
  
  @media (max-width: 992px) {
    .top-footer, .bot-footer {
      flex-direction: column;
    }
  }
`;

export default StyledFooter;