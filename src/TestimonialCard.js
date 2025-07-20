import defaultPhoto from "./assets/defaultPhoto.png";

export default function TestimonialCard({ rating, name, image, review }) {
  const rounded = Math.round(rating);
  const stars = "★".repeat(rounded) + "☆".repeat(5 - rounded);

  return (
    <article>
      <span>{stars}</span>
      <div>
        <img src={image || defaultPhoto} alt={name} />
        <h4>{name}</h4>
      </div>
      <p>{review}</p>
    </article>
  );
}