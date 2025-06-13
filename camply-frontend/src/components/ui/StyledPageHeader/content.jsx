import styled from "styled-components";

const StyledPageHeaderContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 16px;
  }

  p {
    flex-basis: 70%;
  }

  .right {
    display: flex;
    gap: 16px;
    flex-basis: 30%;
  }

  @media (max-width: 992px) {
    .content {
      flex-direction: column;
      width: 100%;
    }

    .right {
      display: block;
    }

    .right button {
      margin-top: 16px;
      margin-right: 16px;
    }
  }
`;

export default StyledPageHeaderContent;
