import Hero from "../components/Hero";
import Features from "../components/Features";
import ImageCarousel from "../components/ImageCarousel";

const description =
  "Lupakan repotnya membeli dan menyimpan alat. Kami sediakan semua perlengkapan camping berkualitas yang kamu butuhkan, siap untuk petualanganmu berikutnya.";
const title = "Rencanakan Petualangan Camping Terbaikmu.";
function Home() {
  return (
    <>
      <Hero
        button
        title={title}
        description={description}
        button1="Ayo Menjelajahi"
      />
      <ImageCarousel />
      <Features />
    </>
  );
}

export default Home;
