import GreekSalad from './icons_assets/greek salad.jpg';
import LemonDessert from './icons_assets/lemon dessert.jpg';

function Specials() { 
    return (
       <article style={{display: "inline-flex"}}>
        <figure>
            <img src={GreekSalad} alt='Greek Salad' width='500'></img>
            <figcaption>Our Greek Salad is made with chicken, tomatoes, cucumbers, and various other vegetables. It is delicious and nutritious.</figcaption>
        </figure>
        <figure>
            <img src={LemonDessert} alt='Lemon Dessert' width='500'></img>
            <figcaption>Our Lemon Dessert is a perrenial favorite because it is made with fresh lemons.</figcaption>
        </figure>

       </article>
    );
    }

    export default Specials;