import GreekSalad from './icons_assets/greek salad.jpg';
import LemonDessert from './icons_assets/lemon dessert.jpg';
import Bruchetta from './icons_assets/bruchetta.svg';

function Menu() { 
    return (
       <article className="Menu">
        <h1>Menu</h1>
        <h2>Greek Salad</h2>
        <figure>
            <img src={GreekSalad} alt='Greek Salad' width='400'></img>
            <figcaption>Our Greek Salad is made with chicken, tomatoes, cucumbers, and various other vegetables. It is delicious and nutritious. $9.99</figcaption>
        </figure>
        <h2>Bruchetta</h2>
        <figure>
            <img src={Bruchetta} alt='Bruchetta' width='400'></img>
            <figcaption>Our  Bruchetta is topped with fresh tomatoes and other spices. $7.99</figcaption>
        </figure>
        <h2>Lemon Dessert</h2>
        <figure>
            <img src={LemonDessert} alt='Lemon Dessert' width='400'></img>
            <figcaption>Our Lemon Dessert is a perrenial favorite because it is made with fresh lemons and topped 
                with our signature homemade whipped cream. $5.99</figcaption>
        </figure>

       </article>
    );
    }

    export default Menu;