import { Link } from "react-router-dom";
import { StyledBlogItem, StyledFirstBlogItem } from "../ui/StyledBlog";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function FirstBlog({
  id,
  img,
  category,
  title,
  body,
  author,
  profile_photo,
  date,
  month,
  year,
}) {
  return (
    <StyledFirstBlogItem>
      <img src={img} alt={`image of ${title} guide`} />
      <div className="desc">
        <div className="blog-info">
          <p className="category">{category}</p>
          <Link to={`/guide/${id}`}>
            <h3>{title}</h3>
          </Link>
          <p className="description">{body}</p>
        </div>
        <div className="blog-author">
          <img src={profile_photo} alt={`${author} profile photo`} />
          <div>
            <p className="name">{author}</p>
            <p>{`${date} ${months[month]} ${year} * 5 min read`}</p>
          </div>
        </div>
      </div>
    </StyledFirstBlogItem>
  );
}

function Blog({
  id,
  img,
  category,
  title,
  body,
  author,
  profile_photo,
  date,
  month,
  year,
}) {
  return (
    <StyledBlogItem>
      <img src={img} alt={`image of ${title} guide`} />
      <div className="blog-info">
        <p className="category">{category}</p>
        <Link to={`/guide/${id}`}>
          <h3>{title}</h3>
        </Link>
        <p className="description">{body}</p>
      </div>
      <div className="blog-author">
        <img src={profile_photo} alt={`${author} profile photo`} />
        <div>
          <p className="name">{author}</p>
          <p>{`${date} ${months[month]} ${year} * 5 min read`}</p>
        </div>
      </div>
    </StyledBlogItem>
  );
}

export { FirstBlog, Blog };
