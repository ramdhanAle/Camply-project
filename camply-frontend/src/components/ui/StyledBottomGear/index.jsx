import styled from "styled-components";

const StyledBottomGear = styled.section`
  padding: 112px 0;
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: space-between;
  p {
    font-size: 18px;
  }

  .left {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .right {
    display: flex;
    gap: 16px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export default StyledBottomGear;
