
import { Link } from "react-router-dom";

function Nav() { 
    return (
        <nav style={{display: "inline-flex"}}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Chicago">About</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/BookingPage">Make Reservation</Link></li>
                <li><Link to="/Order">Order Online</Link></li>
                <li><Link to="/LogIn">Log In</Link></li>
            </ul>
        </nav>
    );
    }

    export default Nav;