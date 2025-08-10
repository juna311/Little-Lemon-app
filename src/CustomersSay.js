import TestimonialCard from './TestimonialCard.js'
import testimonials from './testimonials';


export default function CustomersSay() {
    return (
        <section className='customers-say'>
            <div className='container'>
                <h2 className='cs-title'>Testimonials</h2>
                <div className='cs-grid'>
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
            </div>
        </section>
    );
}
