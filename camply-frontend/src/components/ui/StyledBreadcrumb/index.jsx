import styled from "styled-components";

const StyledBreadcrumb = styled.div`
  font-size: 14px;
  span {
    display: block;
    width: 24px;
    height: 24px;
    text-align: center;
    font-weight: bold;
  }
  ul {
    display: flex;
    gap: 8px;
  }

  ul li.active {
    font-weight: 600;
  }
`;

export default StyledBreadcrumb;