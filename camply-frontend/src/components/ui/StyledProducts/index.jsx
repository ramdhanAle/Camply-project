import styled from "styled-components";

const StyledProducts = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: start;
  align-items: start;
  gap: 64px;
  padding: 112px 64px;

  @media (max-width: 768px) {
    padding: 64px 20px;
  }
`;

export default StyledProducts;
