import { Blog } from "../Blog";
import Breadcrumb from "../Breadcrumb";
import Button from "../ui/button";
import {
  StyledDetailBlogContainer,
  StyledDetailBlogHead,
  StyledDetailBlogHeadTitle,
  StyledDetailBlogHeadImg,
  StyledDetailBlogBodyContainer,
  StyledDetailBlogBody,
  StyledDetailBlogShare,
  StyledDetailBlogShareSection,
  StyledDetailBlogTag,
  StyledDetailBlogRelatedContainer,
  StyledDetailBlogRelatedHead,
  StyledDetailBlogRelatedPosts,
} from "../ui/StyledDetailBlog";
import Author from "./Author";
import ShareItems from "./ShareItems";

function DetailBlog({ blog }) {
  return (
    <StyledDetailBlogContainer>
      <StyledDetailBlogHead>
        <StyledDetailBlogHeadTitle>
          <Breadcrumb />
          <h2 className="font-sora">{blog.title}</h2>
          <StyledDetailBlogShareSection>
            <Author
              img={blog.img}
              name={blog.author}
              day={"22"}
              month={"Mar"}
              year={"2004"}
            />
            <ShareItems />
          </StyledDetailBlogShareSection>
        </StyledDetailBlogHeadTitle>
        <StyledDetailBlogHeadImg src={blog.img} alt={`${blog.title} image`} />
      </StyledDetailBlogHead>

      <StyledDetailBlogBodyContainer>
        <StyledDetailBlogBody>{blog.body}</StyledDetailBlogBody>
        <StyledDetailBlogShareSection>
          <StyledDetailBlogShare>
            <p>Share this post</p>
            <ShareItems />
          </StyledDetailBlogShare>
          <StyledDetailBlogTag>
            <Button $extraSmall>Tag One</Button>
            <Button $extraSmall>Tag Two</Button>
            <Button $extraSmall>Tag Three</Button>
            <Button $extraSmall>Tag Four</Button>
          </StyledDetailBlogTag>
        </StyledDetailBlogShareSection>
        <hr />
        <Author
          img={blog.img}
          name={blog.author}
          day={"22"}
          month={"Mar"}
          year={"2004"}
        />
      </StyledDetailBlogBodyContainer>

      <StyledDetailBlogRelatedContainer>
        <StyledDetailBlogRelatedHead>
          <p className="title">Blog</p>
          <h2>Related Post</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </StyledDetailBlogRelatedHead>
        <StyledDetailBlogRelatedPosts>
          <Blog
            id={blog.id}
            img={blog.img}
            title={blog.title}
            category={blog.category}
            body={blog.body}
            author={blog.author}
            profile_photo={blog.profile_picture}
            date={blog.created_at.getDate()}
            month={blog.created_at.getMonth()}
            year={blog.created_at.getFullYear()}
          />
          <Blog
            id={blog.id}
            img={blog.img}
            title={blog.title}
            category={blog.category}
            body={blog.body}
            author={blog.author}
            profile_photo={blog.profile_picture}
            date={blog.created_at.getDate()}
            month={blog.created_at.getMonth()}
            year={blog.created_at.getFullYear()}
          />
          <Blog
            id={blog.id}
            img={blog.img}
            title={blog.title}
            category={blog.category}
            body={blog.body}
            author={blog.author}
            profile_photo={blog.profile_picture}
            date={blog.created_at.getDate()}
            month={blog.created_at.getMonth()}
            year={blog.created_at.getFullYear()}
          />
        </StyledDetailBlogRelatedPosts>
      </StyledDetailBlogRelatedContainer>
    </StyledDetailBlogContainer>
  );
}

export default DetailBlog;
