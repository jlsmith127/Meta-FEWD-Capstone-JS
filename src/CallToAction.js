import MandA from "./icons_assets/Mario and Adrian A.jpg"

function CallToAction() { 
    return (
      <article class="CTA">
       <img src= {MandA} alt="Mario and Adrian" width="700" style={{float: "right"}} /> 
       <h1>Little Lemon</h1>
       <h2>Chicago</h2>
       <p>Little Lemon Restaurant offers a variety of Mediterranean Food</p>
       <button>Order Now</button>
      </article>
    );
    }

    export default CallToAction;