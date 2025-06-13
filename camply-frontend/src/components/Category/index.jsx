import { Link } from "react-router-dom";
import { StyledCategoryItems } from "../ui/StyledBlog";
import Button from "../ui/button";

function Category({ data }) {
  return (
    <StyledCategoryItems>
      <li>
        <Button $small>
          <Link to="#">View all</Link>
        </Button>
      </li>
      {data.map((category, index) => (
        <li key={index}>
          <Link to="#">{category}</Link>
        </li>
      ))}
    </StyledCategoryItems>
  );
}

export default Category;
