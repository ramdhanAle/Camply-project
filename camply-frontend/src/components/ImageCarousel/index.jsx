import { useEffect, useRef } from "react";
import { StyledImage, StyledImageCarousel } from "../ui/StyledImageCarousel";

const imgData1 = [
  "https://picsum.photos/400/400/",
  "https://picsum.photos/400/400/",
  "https://picsum.photos/400/400/",
  "https://picsum.photos/400/400/",
  "https://picsum.photos/400/400/",
  "https://picsum.photos/400/400/",
];
const imgData2 = [
  "https://picsum.photos/500/500/",
  "https://picsum.photos/500/500/",
  "https://picsum.photos/500/500/",
  "https://picsum.photos/500/500/",
  "https://picsum.photos/500/500/",
  "https://picsum.photos/500/500/",
];

function ImageCarousel() {
  const carouselRef1 = useRef(null);
  const carouselRef2 = useRef(null);

  useEffect(() => {
    const scrollToCenter = (ref, imgWidth, gap, totalImages) => {
      if (ref.current) {
        const middleIndex = Math.floor(totalImages / 2);
        const scrollPosition =
          middleIndex * (imgWidth + gap) -
          ref.current.clientWidth / 2 +
          imgWidth / 2;
        ref.current.scrollLeft = scrollPosition;
      }
    };

    scrollToCenter(carouselRef1, 416, 16, imgData1.length);
    scrollToCenter(carouselRef2, 0, 16, imgData2.length);
  }, []);

  return (
    <>
      <StyledImageCarousel ref={carouselRef1}>
        {imgData1.map((img, i) => (
          <StyledImage key={i} src={img} alt="" />
        ))}
      </StyledImageCarousel>
      <StyledImageCarousel ref={carouselRef2}>
        {imgData2.map((img, i) => (
          <StyledImage key={i} src={img} alt="" />
        ))}
      </StyledImageCarousel>
    </>
  );
}

export default ImageCarousel;
