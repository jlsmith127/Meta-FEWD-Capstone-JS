function Footer() { 
    return (
        <footer style={{display: "flex"}}>
            <img src="./icons_assets/Logo.svg" alt="Little Lemon Logo" height="68" width="222" style={{display: "inline-flex"}} />
            <ul style={{display: "inline-flex"}}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Log In</a></li>
            </ul>
            <h3 style={{display: "inline-flex"}}>Contact Us</h3>
            <h3 style={{display: "inline-flex"}}>Social Media</h3>
        </footer>
    );
    }

    export default Footer;