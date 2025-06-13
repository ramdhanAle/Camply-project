import { FirstBlog, Blog } from "../Blog";
import Category from "../Category";
import { StyledBlogItems, StyledBlogsContainer } from "../ui/StyledBlog";
import blogs from "../../utils/data/blog";

function Blogs() {
  return (
    <StyledBlogsContainer>
      <FirstBlog
        id={blogs[0].id}
        img={blogs[0].img}
        title={blogs[0].title}
        category={blogs[0].category}
        body={blogs[0].body}
        author={blogs[0].author}
        profile_photo={blogs[0].profile_picture}
        date={blogs[0].created_at.getDate()}
        month={blogs[0].created_at.getMonth()}
        year={blogs[0].created_at.getFullYear()}
      />

      <Category data={["Camping", "Tutorial", "Info"]} />

      <StyledBlogItems>
        {blogs.slice(1).map((blog) => (
          <Blog
            id={blog.id}
            key={blog.id}
            img={blog.img}
            title={blog.title}
            category={blog.category}
            body={blog.body}
            profile_photo={blog.profile_picture}
            author={blog.author}
            date={blog.created_at.getDate()}
            month={blog.created_at.getMonth()}
            year={blog.created_at.getFullYear()}
          />
        ))}
      </StyledBlogItems>
    </StyledBlogsContainer>
  );
}

export default Blogs;
