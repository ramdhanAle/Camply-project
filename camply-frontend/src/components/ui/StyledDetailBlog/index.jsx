import styled from "styled-components";

const StyledDetailBlogContainer = styled.section`
  padding: 112px 64px;

  @media (max-width: 768px) {
    padding: 64px 20px;
  }
`;

const StyledDetailBlogAuthor = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  p {
    font-size: 14px;
  }

  p.name {
    font-weight: 600;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    object-fit: cover;
    object-position: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 4px;
  }
`;

const StyledDetailBlogHead = styled.div`
  padding-bottom: 112px;
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const StyledDetailBlogHeadTitle = styled.div`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: auto;
`;

const StyledDetailBlogShareSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: end;
`;

const StyledDetailBlogShare = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 18px;
    font-weight: 600px;
  }
`;

const StyledDetailBlogShareItems = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const StyledDetailBlogTag = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const StyledDetailBlogHeadImg = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;
`;

const StyledDetailBlogBodyContainer = styled.article`
  width: 100%;
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: auto;
`;

const StyledDetailBlogBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const StyledDetailBlogRelatedContainer = styled.section`
  padding-top: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const StyledDetailBlogRelatedHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  p {
    font-size: 16px;
  }

  p.title {
    font-size: 18px;
    font-weight: 600px;
  }
`;

const StyledDetailBlogRelatedPosts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 48px;
`;

export {
  StyledDetailBlogContainer,
  StyledDetailBlogHead,
  StyledDetailBlogHeadTitle,
  StyledDetailBlogHeadImg,
  StyledDetailBlogBodyContainer,
  StyledDetailBlogAuthor,
  StyledDetailBlogBody,
  StyledDetailBlogShare,
  StyledDetailBlogShareSection,
  StyledDetailBlogTag,
  StyledDetailBlogRelatedContainer,
  StyledDetailBlogRelatedHead,
  StyledDetailBlogRelatedPosts,
  StyledDetailBlogShareItems,
};
