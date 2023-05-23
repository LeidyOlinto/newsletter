import { useState } from "react";
import "./Cards.css";
//import ProductsCards from "./Products";

function MaisCards(props) {
  const [cards, setCards] = useState([]);
  console.log(cards, "chama mais produtos");


  return (
    <div id="posts-container" className="moreProduct">
         
          <button className="moreButtonCards" onClick={props.Products}>
            Ainda mais produtos aqui!
          </button>
      
    </div>
  );
}
export default MaisCards;

