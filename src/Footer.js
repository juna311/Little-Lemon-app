import logo from './assets/Small-logo.png'

export default function Footer(){
    return (
       <footer>
            <div>
                <img src={logo} alt="Little Lemon logo" />
            </div>
            <div>
                <nav aria-label="Doormat navigation">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </div>
            <div>
                <address>Address</address>
            </div>
            <div>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
            </div>
       </footer>
    );
}