import MandA from "./icons_assets/Mario and Adrian A.jpg"

function CallToAction() { 
    return (
      <article className="CTA">
       <img src= {MandA} alt="Mario and Adrian" width="700" style={{float: "right"}} /> 
       <h1>Little Lemon</h1>
       <p>Little Lemon Restaurant offers a variety of Mediterranean Food at reasonable prices. We pride ourselves 
        on our friendly service, so come on in and check us out!</p>
       <button>Order Now</button>
      </article>
    );
    }

    export default CallToAction;