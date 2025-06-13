import { Link } from "react-router-dom";
import { StyledDetailBlogShareItems } from "../ui/StyledDetailBlog";

function ShareItems() {
  return (
    <StyledDetailBlogShareItems>
      <Link to="#">&l;</Link>
      <Link to="#">&li;</Link>
      <Link to="#">&x;</Link>
      <Link to="#">&f;</Link>
    </StyledDetailBlogShareItems>
  );
}

export default ShareItems;
