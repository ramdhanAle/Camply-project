import styled from "styled-components";

const TestimonialContainer = styled.section`
  padding: 112px 0;
  margin: auto;

  .top {
    margin: auto;
    margin-bottom: 80px;
    width: 100%;
    max-width: 560px;
  }
  
  h2, p {
    text-align: center;
  }
  
  h2 {
    font-weight: 400;
    line-height: 120%;
    margin-bottom: 24px;
  }

  p {
    font-size: 18px;
    line-height: 150%;
    font-weight: 400;
  }

  @media (max-width: 992px) {
    padding: 64px 0;
  }
`;

const TestimonialItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  position: relative;

  button {
    position: absolute;
    background: ${(props) => props.theme.colors['background']};
  }

  button.btn-left {
    left: -25px;
  }

  button.btn-right {
    right: -25px;
  }

  @media (max-width: 768px) {
    button {
      display: none;
    }
  }
`;

const TestimonialItem = styled.div`
  width: 416px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: space-between;
  border-radius: 12px;
  border: 2px solid ${(props) => props.theme.colors['neuralDarkest']};

  .stars {
    display: flex;
    gap: 4px;
  }

  p {
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0;
    font-weight: 400;
    text-align: start;
  }
  
  .customer {
    display: flex;
    gap: 16px;
    align-items: center;
  }

  .customer img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  .customer div p {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0;
    }
    
  .customer div p.name {
    font-weight: 600;
  }

  .customer div p.position {
    font-weight: 400;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
  
  @media (max-width: 1200px) {
    p {
      font-size: 14px;
    }
  }
`;

const PageDotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #333;
  }
`;


export { TestimonialContainer, TestimonialItems, TestimonialItem, PageDotsContainer, Dot };