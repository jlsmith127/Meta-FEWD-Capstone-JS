import GreekSalad from './icons_assets/greek salad.jpg';
import LemonDessert from './icons_assets/lemon dessert.jpg';
import Bruchetta from './icons_assets/bruchetta.svg';

function Menu() { 
    return (
       <article class="Menu">
        <figure>
            <img src={GreekSalad} alt='Greek Salad' width='400'></img>
            <figcaption>Our Greek Salad is made with chicken, tomatoes, cucumbers, and various other vegetables. It is delicious and nutritious.</figcaption>
        </figure>
        <figure>
            <img src={Bruchetta} alt='Bruchetta' width='400'></img>
            <figcaption>Our  Bruchetta is topped with fresh tomatoes.</figcaption>
        </figure>
        <figure>
            <img src={LemonDessert} alt='Lemon Dessert' width='400'></img>
            <figcaption>Our Lemon Dessert is a perrenial favorite because it is made with fresh lemons.</figcaption>
        </figure>

       </article>
    );
    }

    export default Menu;