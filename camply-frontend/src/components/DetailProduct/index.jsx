import {
  StyledDetailProductContainer,
  StyledDetailProductImg,
  StyledDetailProductDetail,
  StyledDetailProductBigInfo,
  StyledDetailProductForm,
  StyledDetailProductFormField,
  StyledDetailProductButtonMenu,
  StyledDetailProductDescriptionContainer,
  StyledDetailProductDescription,
  StyledDetailProductDescriptionTitle,
  StyledDetailProductDescriptionBody,
  StyledDetailProductName,
  StyledDetailProductPrice,
} from "../ui/StyledDetailProduct";
import Breadcrumb from "../Breadcrumb";
import GreenButton from "../ui/button/GreenButton";
import Button from "../ui/button";
import { useState } from "react";
import { Select } from "../ui/form/select";
import Input from "../ui/form/input";

function DetailProduct({ product }) {
  const [openDescription, setOpenDescription] = useState({
    productDetails: false,
    shipping: false,
    returns: false,
  });

  const [quantity, setQuantity] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");

  const handleOpenDescription = (name) => {
    return () => {
      setOpenDescription((prev) => ({
        ...prev,
        [name]: !prev[name],
      }));
    };
  };

  return (
    <>
      {!product ? (
        <StyledDetailProductContainer>
          <p>Product not found.</p>
        </StyledDetailProductContainer>
      ) : (
        <StyledDetailProductContainer>
          <StyledDetailProductImg
            src="https://picsum.photos/500/500"
            alt={`Image ${product?.name} product`}
          />
          <StyledDetailProductDetail>
            <StyledDetailProductBigInfo>
              <Breadcrumb />
              <StyledDetailProductName>{product?.name}</StyledDetailProductName>
              <StyledDetailProductPrice>
                Rp.{" "}
                {new Intl.NumberFormat("id-ID", {
                  currency: "IDR",
                }).format(product?.price_per_day)}{" "}
                / hari
              </StyledDetailProductPrice>
              <StyledDetailProductForm>
                <StyledDetailProductFormField>
                  <label htmlFor="qty">Jumlah</label>
                  <Input
                    type="number"
                    name="qty"
                    id="qty"
                    min="1"
                    max={product?.stock}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                  />
                </StyledDetailProductFormField>
                <StyledDetailProductFormField>
                  <label htmlFor="date">Tanggal sewa</label>
                  <Input
                    type="date"
                    name="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </StyledDetailProductFormField>
                <StyledDetailProductFormField>
                  <label htmlFor="shipment">Pengambilan</label>
                  <Select name="shipment" id="shipment">
                    <option value="self-pick-up">Self Pick Up</option>
                    <option value="delivery">Delivery</option>
                  </Select>
                </StyledDetailProductFormField>
                <StyledDetailProductFormField>
                  <label htmlFor="stock">Stock</label>
                  <p>{product?.stock || 0}</p>
                </StyledDetailProductFormField>
              </StyledDetailProductForm>
              <StyledDetailProductButtonMenu>
                <GreenButton>Tambahkan ke keranjang</GreenButton>
                <Button>Pesan sekarang!</Button>
              </StyledDetailProductButtonMenu>
              <StyledDetailProductDescriptionContainer>
                <StyledDetailProductDescription>
                  <StyledDetailProductDescriptionTitle
                    onClick={handleOpenDescription("description")}
                  >
                    <h5>Deskripsi dan Spesifikasi</h5>
                    <span
                      className={openDescription?.description ? "open" : ""}
                    >
                      ^
                    </span>
                  </StyledDetailProductDescriptionTitle>
                  <StyledDetailProductDescriptionBody
                    className={openDescription?.description ? "open" : "close"}
                  >
                    {product?.description ||
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur deleniti iure commodi qui similique, officiis totam aspernatur repellat illum nostrum?"}
                  </StyledDetailProductDescriptionBody>
                </StyledDetailProductDescription>
                <StyledDetailProductDescription
                  onClick={handleOpenDescription("shipping")}
                >
                  <StyledDetailProductDescriptionTitle>
                    <h5>Pengambilan & Pengembalian</h5>
                    <span className={openDescription.shipping ? "open" : ""}>
                      ^
                    </span>
                  </StyledDetailProductDescriptionTitle>
                  <StyledDetailProductDescriptionBody
                    className={openDescription.shipping ? "open" : "close"}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur deleniti iure commodi qui similique, officiis
                    totam aspernatur repellat illum nostrum?
                  </StyledDetailProductDescriptionBody>
                </StyledDetailProductDescription>
                <StyledDetailProductDescription>
                  <StyledDetailProductDescriptionTitle
                    onClick={handleOpenDescription("returns")}
                  >
                    <h5>Syarat & Ketentuan Sewa</h5>
                    <span className={openDescription.returns ? "open" : ""}>
                      ^
                    </span>
                  </StyledDetailProductDescriptionTitle>
                  <StyledDetailProductDescriptionBody
                    className={openDescription.returns ? "open" : "close"}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur deleniti iure commodi qui similique, officiis
                    totam aspernatur repellat illum nostrum?
                  </StyledDetailProductDescriptionBody>
                </StyledDetailProductDescription>
              </StyledDetailProductDescriptionContainer>
            </StyledDetailProductBigInfo>
          </StyledDetailProductDetail>
        </StyledDetailProductContainer>
      )}
    </>
  );
}

export default DetailProduct;
