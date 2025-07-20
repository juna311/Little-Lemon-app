export default function DishCard({image, title, description, price, }) {
    return (
        <article>
            <img src={image}></img>
            <div>
                <h3>{title}</h3>
                <span>{price}</span>
            </div>
            <p>{description}</p>
        </article>
    )
}