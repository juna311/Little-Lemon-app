import Button from "./Button.js"
import DishCard from "./DishCard.js"
import lemonDessert from "./assets/lemonDessert.jpeg"
import bruschetta from "./assets/bruschetta.jpg"
import greekSalad from "./assets/greekSalad.jpg"

const dishes = [
    {title: 'Greek Salad', price: '$12.99', image: greekSalad, description: 'Greek salad'},
    {title: 'Bruschetta', price: '$5.99', image: bruschetta, description: 'Bruschetta'},
    {title: 'Lemon Dessert', price: '$4.99', image: lemonDessert, description: 'Lemon dessert'}
]

function handleClick(){
    console.log("Redirected to the ordering page")
}

export default function Specials() {
    return (
        <section>
            <div>
                <h1>This weeks specials!</h1>
                <Button onClick={handleClick} className="orderOnline">Order online</Button>
            </div>
            {dishes.map((dish, index) => (
                <DishCard
                    key={index}
                    title={dish.title}
                    price={dish.price}
                    description={dish.description}
                    image={dish.image}
                    />
            ))}
        </section>
    );
}