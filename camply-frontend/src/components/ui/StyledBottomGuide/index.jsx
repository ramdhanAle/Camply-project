import styled from "styled-components";

const StyledBottomGuide = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 80px;
  padding: 0 64px;

  .left {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .left div {
    display: flex;
    gap: 16px;
  }

  img {
    width: 100%;
    max-width: 616px;
    height: 400px;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
    padding: 0 20px;
  }
`;

export default StyledBottomGuide;
