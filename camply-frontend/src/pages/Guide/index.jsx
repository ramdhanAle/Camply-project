import Blogs from "../../components/Blogs";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/ui/button";
import GreenButton from "../../components/ui/button/GreenButton";
import StyledBottomGuide from "../../components/ui/StyledBottomGuide";

function Guide() {
  const title = "Guide";
  const description =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit debitis voluptatem doloremque saepe?";

  return (
    <>
      <PageHeader title={title} description={description} />
      <Blogs />
      <StyledBottomGuide>
        <div className="left">
          <h2>Invite the visitor to try your product services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia suscipit repudiandae et eligendi quod animi quibusdam velit
            voluptatem a.
          </p>
          <div>
            <GreenButton $small>Button</GreenButton>
            <Button $small>Button</Button>
          </div>
        </div>
        <img src="https://picsum.photos/800/800" alt="Picsum photo" />
      </StyledBottomGuide>
    </>
  );
}

export default Guide;
