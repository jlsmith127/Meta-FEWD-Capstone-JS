import Logo from './icons_assets/Logo.svg'

function Header() { 
return (
    <header style={{display: "inline-flex"}}>
        <img src={Logo} alt="Little Lemon Logo" height="68" width="222"/>
    </header>
);
}

export default Header;