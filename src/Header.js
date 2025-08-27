import { Link } from 'react-router-dom';
import logo from './assets/Logo-lemon.jpg';

export default function Header({className}){
    return (
        <header className={className}>
            <div className='container'>
                <nav aria-label="Main navigation">
                    <Link to="/" className='logo-link' aria-label="Go to home page">
                        <img src={logo} alt="Little Lemon logo" />
                    </Link>
                    <ul role="menubar">
                        <li role="none"><Link to="/" role="menuitem">Home</Link></li>
                        <li role="none"><a href="#" onClick={(e) => e.preventDefault()} role="menuitem" aria-label="About page (coming soon)">About</a></li>
                        <li role="none"><a href="#" onClick={(e) => e.preventDefault()} role="menuitem" aria-label="Menu page (coming soon)">Menu</a></li>
                        <li role="none"><Link to="/bookings" role="menuitem">Reservations</Link></li>
                        <li role="none"><a href="#" onClick={(e) => e.preventDefault()} role="menuitem" aria-label="Order online (coming soon)">Order Online</a></li>
                        <li role="none"><a href="#" onClick={(e) => e.preventDefault()} role="menuitem" aria-label="Login page (coming soon)">Login</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}