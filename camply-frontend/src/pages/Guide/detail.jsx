import { useParams } from "react-router-dom";
import blogs from "../../utils/data/blog";
import DetailBlog from "../../components/DetailBlog";

function GuideDetail() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id == id);

  return (
    <>
      <DetailBlog blog={blog} />
    </>
  );
}

export default GuideDetail;
