import Button from "../ui/button";
import GreenButton from "../ui/button/GreenButton";
import HeroUI from "../ui/hero";

function Hero({ title, description, button1, button2, sponsor, button }) {
  return (
    <>
      <HeroUI>
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          {button && (
            <div className="button">
              <GreenButton $small>{button1}</GreenButton>
            </div>
          )}
        </div>
        {sponsor && (
          <div className="sponsor">
            <img src="https://picsum.photos/600/600" alt="" />
            <img src="https://picsum.photos/600/600" alt="" />
            <img src="https://picsum.photos/600/600" alt="" />
            <img src="https://picsum.photos/600/600" alt="" />
            <img src="https://picsum.photos/600/600" alt="" />
            <img src="https://picsum.photos/600/600" alt="" />
            <img src="https://picsum.photos/600/600" alt="" />
          </div>
        )}
      </HeroUI>
    </>
  );
}

export default Hero;
