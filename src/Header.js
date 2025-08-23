import { Link } from 'react-router-dom';
import logo from './assets/Logo-lemon.jpg';

export default function Header({className}){
    return (
        <header className={className}>
            <div className='container'>
                <nav aria-label="Main navigation">
                    <Link to="/" className='logo-link'>
                        <img src={logo} alt="Little Lemon logo" />
                    </Link>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>About</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Menu</a></li>
                        <li><Link to="/bookings">Reservations</Link></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Order Online</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}