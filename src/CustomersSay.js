import TestimonialCard from './TestimonialCard.js'
import testimonials from './testimonials';


export default function CustomersSay() {
    return (
        <section>
            <h2>Testimonials</h2>
            <div className='card-grid'>
                {testimonials.map((t, i) =>
                <TestimonialCard
                    key={i}
                    rating={t.rating}
                    name={t.name}
                    image={t.image}
                    review={t.review}
                />
            )}
            </div>
        </section>
    );
}
