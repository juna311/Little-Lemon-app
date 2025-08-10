import interior from "./assets/restaurantInterior.jpg";
import food from "./assets/food.jpg";
import { useState } from "react";

export default function About() {

    const [front, setFront] = useState('a')

  return (
    <section className="about__section">
      <div className="container">
        <h2 id="about__title">About Us</h2>

        <div className="about__wrapper">
          <div className="about__content">
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>Some description text</p>
          </div>

          <div className="about__photo">
            <img id="interior"
            src={interior}
            alt="Little Lemon restaurant interior"
            onClick={() => setFront('a')}
            className={`about__photo--a  ${front==='a' ? 'is-front' : ''}`}
            role="button"
            aria-pressed={front === "a"}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setFront("a");
              }}
            draggable="false"/>

            <img id="food"
            src={food}
            alt="Mediterranean dish served at Little Lemon"
            onClick={() => setFront('b')}
            className={`about__photo--b  ${front==='b' ? 'is-front' : ''}`}
            role="button"
            aria-pressed={front === "b"}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setFront("b");
              }}
            draggable="false"/>
          </div>
        </div>
      </div>
    </section>
  );
}