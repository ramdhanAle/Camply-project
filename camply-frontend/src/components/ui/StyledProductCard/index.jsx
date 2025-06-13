import styled from "styled-components";

const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
  max-width: 304px;

  img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    object-fit: cover;
    object-position: center;
  }

  .top-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    font-weight: 400;
    font-size: 14px;
  }

  p span {
    color: ${(props) => props.theme.colors["thatchGreen"]};
  }

  .top-info a,
  .top-info p {
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
  }

  .menu-button {
    display: flex;
    gap: 16px;
  }

  button.order-button {
    display: block;
    width: 100%;
  }
`;

export default StyledProductCard;
