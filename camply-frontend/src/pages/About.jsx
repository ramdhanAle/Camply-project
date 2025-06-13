import {
  StyledAboutDescription,
  StyledAboutDescriptionBody,
  StyledAboutDescriptionImg,
  StyledAboutHeader,
  StyledAboutHeaderContent,
} from "../components/ui/StyledAbout";

function About() {
  return (
    <>
      <StyledAboutHeader>
        <StyledAboutHeaderContent>
          <h1>Describe what makes Your company unique</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            ratione ducimus culpa fugiat.
          </p>
        </StyledAboutHeaderContent>
      </StyledAboutHeader>
      <StyledAboutDescription>
        <StyledAboutDescriptionBody>
          <p className="tagline">Tagline</p>
          <h2>About Camply</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            maiores aut sunt commodi dicta cupiditate officiis, eos quos libero
            aliquam et quia unde in voluptates est exercitationem nemo error?
            Mollitia architecto voluptates laudantium eligendi facere ratione!
            Corporis asperiores id eligendi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            officiis perferendis laudantium, ratione minima nesciunt velit
            dolore. Tempora, ipsam tempore!
          </p>
        </StyledAboutDescriptionBody>
        <StyledAboutDescriptionImg
          src="https://picsum.photos/600/600"
          href="About Camply"
        />
      </StyledAboutDescription>
    </>
  );
}

export default About;
