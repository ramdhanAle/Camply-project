import { useNavigate, useParams } from "react-router-dom";
import DetailProduct from "../../components/DetailProduct";
import { showGear } from "../../_services/gears";
import { useEffect, useState } from "react";

function GearDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  // const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await showGear(id);
      setProduct(response);
    };

    fetchData();
  }, [id]);
  return (
    <>
      <DetailProduct product={product} />
    </>
  );
}

export default GearDetail;
