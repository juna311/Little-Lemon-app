import logo from './assets/Logo-lemon.jpg';

export default function Header(){
    return (
        <header>
            <nav aria-label="Main navigation">
                <img src={logo} alt="Little Lemon logo" />
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Menu</a></li>
                    <li><a href='#'>Reservations</a></li>
                    <li><a href='#'>Order Online</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            </nav>
        </header>
    )
}