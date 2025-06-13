import styled from "styled-components";

const StyledAboutHeader = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://picsum.photos/600/600");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 112px 64px;
  text-align: center;

  h1 {
    margin-bottom: 32px;
    color: white; /* Make text visible against dark background */
  }

  @media (max-width: 768px) {
    padding: 64px 20px;
  }
`;

const StyledAboutHeaderContent = styled.div`
  width: 100%;
  max-width: 768px;
  margin: auto;
  color: #fff;
`;

const StyledAboutDescription = styled.section`
  padding: 112px 64px;
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 64px 20px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StyledAboutDescriptionBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  p {
    font-size: 18px;
  }

  p.tagline {
    font-weight: 600;
    font-size: 16px;
  }
`;

const StyledAboutDescriptionImg = styled.img`
  height: 640px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  max-width: 616px;
  border-radius: 12px;
`;

export {
  StyledAboutHeader,
  StyledAboutHeaderContent,
  StyledAboutDescription,
  StyledAboutDescriptionBody,
  StyledAboutDescriptionImg,
};
