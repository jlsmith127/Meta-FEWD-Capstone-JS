import Nav from './Nav';
import Logo from './icons_assets/Logo.svg';

function Footer() { 
    return (
        <footer className = "footer">
            <article className = "bottom-nav">
            <img src={Logo} alt="Little Lemon Logo" height="68" width="222" style={{display: "inline-flex"}} />
            <Nav />
            </article>
            <article className = "contact">
            <h3>Contact Us</h3>
            <p>Phone: 123-4567</p>
            <p>Email: abc@123.com</p>
            <p>Address: 123 Main Street, Chicago, Illinois</p>
            </article>
            <article className = "social">
            <h3>Social Media</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Pinterest</p>
            </article>
        </footer>
    );
    }

    export default Footer;