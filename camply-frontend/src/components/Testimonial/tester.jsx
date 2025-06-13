import { TestimonialItem } from "../ui/StyledTestimonial";

function Tester({ testimonialData }) {
  return (
    <TestimonialItem>
      <div className="stars">
        {Array.from({ length: testimonialData.rating }, (_, index) => (
          <span key={index}>⭐</span>
        ))}
      </div>
      <p>
        "{testimonialData.testi}"
      </p>
      <div className="customer">
        <img src={testimonialData.profile_photo} alt="" />
        <div>
          <p className="name">
            {testimonialData.name}
          </p>
          <p className="position">
            {testimonialData.address}
          </p>
        </div>
      </div>
    </TestimonialItem>
  )
}

export default Tester;