import { useNavigate } from 'react-router-dom';
import Button from './Button.js'
import heroImg from './assets/hero.jpg';

export default function CallToAction() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/bookings');
  }

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