import { Link } from 'react-router-dom';
import logo from './assets/Small-logo.png'

export default function Footer({className}){
    return (
       <footer className={className}>
            <div className='container'>
                <div className='footer-img'>
                    <Link to="/" className='logo-link'>
                    <img src={logo} alt="Little Lemon logo" />
                    </Link>
                </div>
                    <nav aria-label="Doormat navigation" className='footer-nav' >
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}>About</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}>Menu</a></li>
                            <li><Link to="/bookings">Reservations</Link></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}>Order Online</a></li>
                            <li><a href="#" onClick={(e) => e.preventDefault()}>Login</a></li>
                        </ul>
                    </nav>
                <div className='footer-address'>
                    <address>Address</address>
                </div>
                <div className='footer-links'>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>
       </footer>
    );
}