export default function DishCard({image, title, description, price, }) {
    return (
        <article className="dish-card">
            <img src={image} alt={title}></img>
            <div className="title">
                <h3>{title}</h3>
                <span>{price}</span>
            </div>
            <p>{description}</p>
        </article>
    )
}