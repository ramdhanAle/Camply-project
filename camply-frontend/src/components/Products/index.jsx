import StyledProducts from "../ui/StyledProducts";
import Product from "../product";
import { getAllGear } from "../../_services/gears";
import { useEffect, useState } from "react";

function Products({ searchTerm }) {
  const [gearDatas, setGearDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAllGear();
      setGearDatas(response);
    };

    fetchData();
  }, []);

  const filteredGear = gearDatas.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <StyledProducts>
      {filteredGear.length > 0 ? (
        filteredGear.map((product, index) => (
          <Product
            key={index}
            id={product.id}
            img={product.image_url}
            name={product.name}
            price={product.price_per_day}
            stock={product.stock}
          />
        ))
      ) : (
        <p>Product not found</p>
      )}
    </StyledProducts>
  );
}

export default Products;
