import defaultPhoto from "./assets/defaultPhoto.png";

export default function TestimonialCard({ rating, name, image, review }) {
  const rounded = Math.round(rating);
  const stars = "★".repeat(rounded) + "☆".repeat(5 - rounded);

  return (
    <article className="testimonial-card">
      <span className="testimonial-card__rating" aria-label={`${rounded} out of 5 stars`}>{stars}</span>
      <div className="testimonial-card__meta">
        <div className="testimonial-card__photo">
          <img src={image || defaultPhoto} alt={name} />
        </div>
        <h4 className="testimonial-card__name">{name}</h4>
      </div>
      <p className="testimonial-card__review">{review}</p>
    </article>
  );
}