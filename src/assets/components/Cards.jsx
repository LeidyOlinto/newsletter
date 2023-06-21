import "./Cards.css";

function MaisCards(props) {
  const loadMore = async () => {
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
  function toTopFunction() {
    const scrollToTop = document.documentElement || document.body;
    scrollToTop.scrollIntoView({ behavior: "smooth" });
   
  }

  return (
    <div id="posts-container" className="moreProduct">
      <button className="moreButtonCards" onClick={loadMore}>
        Ainda mais produtos aqui!
      </button>
      <button
        onClick={toTopFunction}
        id="toTop"
        title="UP"
        alt="UP"
        className="to-top"
      >
        ⬆
      </button>
    </div>
  );
}
export default MaisCards;

