import styled from "styled-components";

const StyledFeature = styled.section`
  display: flex;
  gap: 80px;
  padding: 112px 64px;

  &.reverse {
    flex-direction: row-reverse;
  }

  p {
    line-height: 150%;
  }
  
  p.tagline {
    font-size: 16px;
    font-weight: 600;
  }

  .feature-desc {
    margin-bottom: 32px;
  }

  .feature-desc h3 {
  font-size: 48px;
    margin-bottom: 24px;
  }

  .feature-desc p {
    font-size: 18px;
  }

  .feature-highlight {
    display: flex;
    margin-bottom: 32px;
    gap: 24px;
    padding: 8px;
  }

  .feature-highlight div {
    flex-basis: 50%;
  }

  .feature-highlight .icon {
    width: 36px;
    height: 40px;
    margin-bottom: 16px;
  }
  
  .feature-highlight h4 {
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 16px;
  }
  
  .feature-highlight p {
    font-size: 16px;
  }

  .content {
    flex-basis: 50%;
  }

  .img {
    flex-basis: 50%;
  }
    
    img {
      border-radius: 12px;
      width: 100%;
      max-width: 616px;
      height: 640px;
      object-fit: cover;
      object-position: center;
  }

  @media (max-width: 768px) {
    padding: 64px 20px;
  }
  
  @media (max-width: 992px) {
    padding: 64px 0;
    flex-direction: column;
    &.reverse {
      flex-direction: column;
    }

    .content, .img {
      flex-basis: 100%;
    }

    img {
      width: 90%:
    }
  } 

  // @media (max-width: 1200px) {
  //   img {
  //     width: 494px;
  //   }
  // }
`;

export default StyledFeature;
