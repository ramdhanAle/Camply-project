import styled from "styled-components";

const StyledImageCarousel = styled.section`
  width: 100%;
  overflow-x: auto;
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  justify-content: flex-start;
  flex-wrap: nowrap;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const StyledImage = styled.img`
  flex: 0 0 auto;
  width: 416px;
  height: 340px;
  border-radius: 12px;
`;

export { StyledImageCarousel, StyledImage };
