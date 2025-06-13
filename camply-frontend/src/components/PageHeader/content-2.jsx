import HeaderTitle from "../ui/HeaderTitle";
import StyledPageHeaderContent from "../ui/StyledPageHeader/content";

function HeaderContentWithoutButton({ title, description }) {
  return (
    <StyledPageHeaderContent>
      <HeaderTitle className="font-sora">{title}</HeaderTitle>
      <div className="content">
        <p>{description}</p>
      </div>
    </StyledPageHeaderContent>
  );
}

export default HeaderContentWithoutButton;
