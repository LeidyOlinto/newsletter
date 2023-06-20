import "./Cards.css";

function MaisCards (props) {
  const loadMore = async () => {
  
    try {
      const response = await fetch(
        'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page='+ props.page
      );
      const data = await response.json();
      props.setProducts([...props.products, ...data.products]);
      props.setPage(props.page + 1)
      console.log(props.page)
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };


  return (
    <div id="posts-container" className="moreProduct">
          <button className="moreButtonCards" onClick={loadMore}>
            Ainda mais produtos aqui!
          </button>
    </div>
  );
}
export default MaisCards;
