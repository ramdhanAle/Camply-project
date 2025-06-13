import { useState } from "react";
import PageHeader from "../../components/PageHeader";
import Products from "../../components/Products";

const title = "Peralatan Lengkap untuk Petualangan Hebat";
const description =
  "Jelajahi keolksi lengkap peralatan camping kamu. Semua dalam kondisi terbaik dan siap menemani petualangan Anda.";

function Gear() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <>
      <PageHeader
        title={title}
        description={description}
        handleSearch={handleSearch}
      ></PageHeader>
      <Products searchTerm={searchTerm} />
    </>
  );
}

export default Gear;
