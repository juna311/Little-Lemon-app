import logo from './assets/Small-logo.png'

export default function Footer({className}){
    return (
       <footer className={className}>
            <div className='container'>
                <div className='footer-img'>
                    <img src={logo} alt="Little Lemon logo" />
                </div>
                    <nav aria-label="Doormat navigation" className='footer-nav' >
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Reservations</a></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
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