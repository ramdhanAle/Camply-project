import HeaderContentWithButton from "./content-1";
import StyledPageHeader from "../ui/StyledPageHeader";

function PageHeader({ title, description, handleSearch }) {
  return (
    <StyledPageHeader>
      <HeaderContentWithButton
        title={title}
        description={description}
        onSearch={handleSearch}
      />
    </StyledPageHeader>
  );
}

export default PageHeader;
