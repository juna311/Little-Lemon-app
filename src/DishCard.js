import Button from './Button.js'


export default function DishCard({image, title, description, price, buttonText, onClick = () => {}}) {
    return (
        <article>
            <img src={image}></img>
            <div>
                <h3>{title}</h3>
                <span>{price}</span>
            </div>
            <p>{description}</p>
            <Button onClick={onClick}>{buttonText}</Button>
        </article>
    )
}