import Nav from './Nav';
import Logo from './icons_assets/Logo.svg';

function Footer() { 
    return (
        <footer style={{display: "flex"}}>
            <img src={Logo} alt="Little Lemon Logo" height="68" width="222" style={{display: "inline-flex"}} />
            <Nav />
            <h3 style={{display: "inline-flex"}}>Contact Us</h3>
            <h3 style={{display: "inline-flex"}}>Social Media</h3>
        </footer>
    );
    }

    export default Footer;