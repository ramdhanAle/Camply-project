import { Link } from "react-router-dom";
import Button from "../ui/button";
import StyledProductCard from "../ui/StyledProductCard";
import GreenButton from "../ui/button/GreenButton";

function Product({ id, img, name, price, stock }) {
  return (
    <StyledProductCard>
      <Link to={`/gear/${id}`}>
        <img loading="lazy" src={img} alt={`image of "${name}" product`} />
      </Link>
      <div>
        <div className="top-info">
          <Link to={`/gear/${id}`}>{name}</Link>
          <p>
            <span>
              Rp.{" "}
              {new Intl.NumberFormat("id-ID", { currency: "IDR" }).format(
                price
              )}{" "}
            </span>
            / hari
          </p>
        </div>
        <p>Stock: {stock}</p>
      </div>
      <div className="menu-button">
        <Button className="order-button" $small>
          Langsung pesan
        </Button>
        <GreenButton $small>&copy;</GreenButton>
      </div>
    </StyledProductCard>
  );
}

export default Product;
