import "./Cards.css";
import React, {  useState } from "react";

function MaisCards(props) {
  const [isLoading, setIsLoading] = useState(false);
  const loadMore = async () => {
    console.log(isLoading)
    try {
      const response = await fetch(
        "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=" +
          props.page
      );
      const data = await response.json();
      props.setProducts([...props.products, ...data.products]);
      props.setPage(props.page + 1);
      console.log(props.page);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
    setIsLoading(false);
  };
  const closeProducts = () => {
    props.setProducts([]);
  };
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("toTop").style.display = "block";
    } else {
      document.getElementById("toTop").style.display = "none";
    }
  }

  return (
    <div id="posts-container" className="moreProduct">
      <button
       className="moreButtonCards" 
       onClick={loadMore}
       disabled={isLoading} // Desabilita o botão durante o carregamento

       >  {isLoading ? (
        <div className="custom-loader"></div>
      ) : (
        "Ainda mais produtos aqui!"
      )}
        
      </button>
      <button
        onClick={closeProducts}
        id="toTop"
        title="Fechar"
        alt="UP"
        className="to-top"
      >
        ✘
      </button>
    </div>
  );
}
export default MaisCards;
