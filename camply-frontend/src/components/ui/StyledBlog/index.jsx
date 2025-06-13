import styled from "styled-components";

const StyledBlogsContainer = styled.section`
  padding: 112px 64px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    padding: 64px 20px;
  }
`;

const StyledFirstBlogItem = styled.article`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    max-width: 656px;
    height: 500px;
    border-radius: 12px;
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-size: 32px;
  }

  div.desc {
    padding-left: 48px;
    display: flex;
    gap: 24px;
    flex-direction: column;

    p {
      font-size: 14px;
      font-weight: 400;
    }

    p.description {
      font-size: 16px;
    }

    p.name,
    p.category {
      font-weight: 600;
    }

    .blog-info {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .blog-author {
      display: flex;
      gap: 16px;

      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        object-position: cover;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 8px;
      }
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: start;
    gap: 25px;

    div.desc {
      padding-left: 0;
    }
  }
`;

const StyledBlogItem = styled.article`
  display: flex;
  gap: 24px;
  flex-direction: column;
  a {
    text-decoration: none;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }

  h3 {
    font-size: 24px;
  }

  p.description {
    font-size: 16px;
  }

  p.name,
  p.category {
    font-weight: 600;
  }

  .blog-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .blog-author {
    display: flex;
    gap: 16px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      object-position: cover;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 8px;
    }
  }

  img {
    width: 100%;
    max-width: 632px;
    height: 300px;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }
`;

const StyledBlogItems = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;

  @media (max-width: 768px) {
    grid-template-columns: repeat() (1, 1fr);
  }
`;

const StyledCategoryItems = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  li {
    padding: 10px 16px;
  }

  & > li {
    padding-left: 0;
  }

  li a {
    font-size: 16px;
    text-decoration: none;
  }
`;

export {
  StyledBlogsContainer,
  StyledFirstBlogItem,
  StyledBlogItems,
  StyledBlogItem,
  StyledCategoryItems,
};
