import interior from "./assets/restaurantInterior.jpg"
import food from "./assets/food.jpg"

export default function About(){
    return (
        <section className="aboutSection">
            <div className="aboutText">
                <h3>Little Lemon</h3>
                <h4>Chicago</h4>
                <p>Some description text</p>
            </div>
            <div className="aboutImg">
                <img src={interior} alt="Little Lemon restaurant interior" />
                <img src={food} alt="Mediterranean dish served at Little Lemon" />
            </div>
        </section>
    );
}