import StyledBreadcrumb from "../ui/StyledBreadcrumb";

function Breadcrumb() {
  return (
    <StyledBreadcrumb>
      <ul>
        <li>
          Link one
        </li>
        <span>&gt;</span>
        <li>
          Link two
        </li>
        <span>&gt;</span>
        <li className="active">
          Link three
        </li>
      </ul>
    </StyledBreadcrumb>
  )
}

export default Breadcrumb;