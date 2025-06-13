import styled from "styled-components";

const HeroUI = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 112px 64px;
  div.content {
    max-width: 768px;
    width: 90%;
  }

  h2 {
    margin-bottom: 24px;
    font-family: "Sora", sans-serif;
    font-weight: 400;
  }

  p {
    margin-bottom: 24px;
  }

  div.button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .sponsor {
    margin-top: 80px;
    display: flex;
    gap: 32px;
  }

  .sponsor img {
    height: 56px;
    width: 140px;
    object-fit: cover;
    object-position: center;
  }

  @media (max-width: 768px) {
    padding: 64px 20px;
  }

  @media (max-width: 992px) {
    padding: 64px 0;

    .sponsor {
      flex-wrap: wrap;
      justify-content: center;
      align-items: start;
    }
  }

  @media (max-width: 1200px) {
    .sponsor img {
      width: 100px;
    }
  }
`;

export default HeroUI;
