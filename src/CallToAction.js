import Button from './Button.js'
import heroImg from './assets/hero.jpg';

function handleClick() {
  console.log("Navigate to reservations page");
}

export default function CallToAction() {
  return (
    <section className='call-to-action'>
      <div className='container'>
      <div className='content'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Authentic Mediterranean cuisine in the heart of Chicago.</p>
        <Button onClick={handleClick} className='reserve'>Reserve a table</Button>
      </div>
      <img src={heroImg} alt='Delicious Mediterranean Dish' className='hero-img'></img>
      </div>
    </section>

  );
}