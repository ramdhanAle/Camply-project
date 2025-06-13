import HeaderContentWithoutButton from "./content-2";
import StyledPageHeader from "../ui/StyledPageHeader";

function PageHeaderWithoutButton({ title, description }) {
  return (
    <StyledPageHeader>
      <HeaderContentWithoutButton title={title} description={description} />
    </StyledPageHeader>
  );
}

export default PageHeaderWithoutButton;
