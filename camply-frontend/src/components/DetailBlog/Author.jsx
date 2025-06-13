import { StyledDetailBlogAuthor } from "../ui/StyledDetailBlog";

function Author({ img, name, day, month, year }) {
  return (
    <StyledDetailBlogAuthor>
      <img src={img} alt={`${name} proile photo`} />
      <div>
        <p className="name">{name}</p>
        <p>{`${day} ${month} ${year}`}</p>
      </div>
    </StyledDetailBlogAuthor>
  );
}

export default Author;
