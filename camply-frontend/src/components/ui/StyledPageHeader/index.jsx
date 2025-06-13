import styled from "styled-components";

const StyledPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 48px 64px 0;

  @media (max-width: 768px) {
    padding: 24px 20px 0;
  }
`;

export default StyledPageHeader;
