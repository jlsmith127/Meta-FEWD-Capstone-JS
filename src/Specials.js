import LemonDessert from './icons_assets/lemon dessert.jpg';
import Bruchetta from './icons_assets/bruchetta.svg';

function Specials() { 
    return (
       <article className="specials">
        <figure>
            <h2>Bruchetta</h2>
            <img src={Bruchetta} alt='Bruchetta'></img>
            <figcaption>Our  Bruchetta is topped with fresh tomatoes and other spices. $7.99</figcaption>
        </figure>
        <figure>
            <h2>Lemon Dessert</h2>
            <img src={LemonDessert} alt='Lemon Dessert'></img>
            <figcaption>Our Lemon Dessert is a perrenial favorite because it is made with fresh lemons and topped 
                with our signature homemade whipped cream. $5.99</figcaption>
        </figure>

       </article>
    );
    }

    export default Specials;