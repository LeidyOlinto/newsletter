import { useState } from "react";
import "./Cards.css";


function MaisCards (props) {
 
  const loadMore = async () => {
    props.setPage(props.page + 1)
    try {
      const response = await fetch(
        'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page='+ page
      );
      const data = await response.json();
      props.setProducts([...props.products,...data.products]);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };


  return (
    <div id="posts-container" className="moreProduct">
         
          <button className="moreButtonCards" onClick={loadMore()}>
            Ainda mais produtos aqui!
          </button>
      
    </div>
  );
}
export default MaisCards;

