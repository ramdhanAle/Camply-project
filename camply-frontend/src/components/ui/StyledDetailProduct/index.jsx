import styled from "styled-components";

const StyledDetailProductContainer = styled.section`
  padding: 80px 64px;
  display: flex;
  gap: 80px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const StyledDetailProductImg = styled.img`
  max-width: 716px;
  width: 100%;
  height: 700px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;

  @media (max-width: 1200px) {
    max-width: 516px;
    height: 600;
  }

  @media (max-width: 992px) {
    height: 500px;
  }
`;

const StyledDetailProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledDetailProductBigInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const StyledDetailProductName = styled.h3`
  font-size: 32px;
`;

const StyledDetailProductPrice = styled.h4`
  font-size: 40px;
`;

const StyledDetailProductForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const StyledDetailProductFormField = styled.div`
  display: flex;
  gap: 8px;

  label {
    flex-basis: 140px;
  }
`;

const StyledDetailProductVariants = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const StyledDetailProductButtonMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledDetailProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledDetailProductDescription = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.colors["neutralDarkest"]};
`;

const StyledDetailProductDescriptionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;

  h5 {
    font-weight: 600;
    color: ${(props) => props.theme.colors["thatchGreen"]};
  }

  span.open {
    transform: rotate(180deg);
  }
`;

const StyledDetailProductDescriptionBody = styled.div`
  font-size: 16px;
  padding-bottom: 15px;
  transition: all ease-out 0.1s;

  &.open {
    height: auto;
  }

  &.close {
    height: 0;
    overflow: hidden;
    padding: 0;
  }
`;

export {
  StyledDetailProductContainer,
  StyledDetailProductImg,
  StyledDetailProductDetail,
  StyledDetailProductBigInfo,
  StyledDetailProductName,
  StyledDetailProductPrice,
  StyledDetailProductForm,
  StyledDetailProductFormField,
  StyledDetailProductVariants,
  StyledDetailProductButtonMenu,
  StyledDetailProductDescriptionContainer,
  StyledDetailProductDescription,
  StyledDetailProductDescriptionTitle,
  StyledDetailProductDescriptionBody,
};
