import Rest from "./icons_assets/restaurant.jpg"

function Chicago() { 
    return (
      <article className="chicago">
       <img src={ Rest } width="700" style={{float: "left"}}/>
       <h1>Little Lemon</h1>
       <h2>Chicago</h2>
       <p>Chicago will always have a special place in our hearts. Why? Because it's where we opened our first location, many
        years ago. We are an institution in that area, making a name for ourselves synonymous with good food and friendly 
        service. We cordially invite you to come in and see for yourselves!</p>
      </article> 
    );
    }

    export default Chicago;