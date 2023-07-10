
import { Link } from "react-router-dom";

function Nav() { 
    return (
        <nav style={{display: "inline-flex"}}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Chicago">About</Link></li>
                <li><Link to="/Specials">Menu</Link></li>
                <li><Link to="/BookingPage">Reservations</Link></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Log In</a></li>
            </ul>
        </nav>
    );
    }

    export default Nav;