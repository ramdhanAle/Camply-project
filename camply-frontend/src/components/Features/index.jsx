import { Link } from "react-router-dom";
import Button from "../ui/button";
import StyledFeature from "../ui/StyledFeature";
import Highlight from "./highlight";

function Features() {
  return (
    <>
      <StyledFeature>
        <div className="content">
          <div className="feature-desc">
            <h3>Sewa Peralatan Camping Lengkap & Berkualitas</h3>
            <p>
              Tidak perlu pusing membeli atau menyimpan alat camping yang mahal
              dan memakan tempat. Pilih dari koleksi lengkap kami, mulai dari
              tenda, sleeping bag, hingga alat memasak. Semua dalam kondisi
              prima dan siap pakai untuk petualangan Anda.
            </p>
          </div>
          <div className="feature-highlight">
            <Highlight
              icon="&copy;"
              title="Hemat Biaya"
              desc="Nikmati perlengkapan premium tanpa harus membelinya. Jauh lebih ekonomis untuk setiap perjalanan berkemah anda, baik solo maupun bersama rombongan."
              image="https://picsum.photos/300/300"
            />
            <Highlight
              icon="&copy;"
              title="Praktis dan terjamin"
              desc="Pesan online, ambil, dan langsung berangkat. kami pastikan semua alat bersih, berfungsi baik, dan lengkap sesuai pesanan Anda."
              image="https://picsum.photos/300/300"
            />
          </div>
          <Link to="gear">
            <Button $small>Lihat katalog alat</Button>
          </Link>
        </div>
        <img src="https://picsum.photos/300/300" alt="Image of Feature one" />
      </StyledFeature>
    </>
  );
}

export default Features;
