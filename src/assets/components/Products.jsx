import { useEffect } from "react";
import "./Products.css";

function ProductsCards({ products, setProducts }) {
  useEffect(() => {
    console.log("deu certo");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1"
      );
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Erro ao buscar os produtos:", error);
    }
  };

  return (
    <div className="produtos-container " id="produtos">
      {products.map((product, index) => (
        <div key={"produto-" + index}>
          <section>
            <ul className="section">
              <div>
                <img src={product.image} className="imges" />
              </div>
              <div className="informationCard">
                <div className="nameProduct">{product.name}</div>
                <p className="descrictionCard">{product.description}</p>
                <div className="valorProdcuct">De: R$ {product.oldPrice}</div>
                <div className="valueReal">Por: R$ {product.price}</div>
                <button className="buttonCardPurchase">Comprar</button>
              </div>
            </ul>
          </section>
        </div>
      ))}
    </div>
  );
}
export default ProductsCards;
