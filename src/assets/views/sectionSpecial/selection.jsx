import "./selection.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";

function Selection() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        const newProducts = data.products.slice(0, 2);
        setProducts([...products, ...newProducts]);
      });
  }, [page]);
  // lógica de busca de mais produtos dentro da função
  function fetchMoreProducts() {
    console.log(page);
    setPage((page) => page + 1);
  }
  const closeProducts = () => {
    setProducts([]);
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
    <div className="containerSelection">
      <Header />
      <div className="Selection"></div>
      <div className="textSelection">
        <span className="nameSelection">Olá, Mariana</span>
        <p className="textInforSelection">
          Fizemos uma lista especial de produtos apenas para você. Isso mesmo:
          nesta lista temos só produtos que você pode gostar. Seu amigo Ciclano
          lhe recomendou essa lista especial. Olha só:
        </p>
      </div>
      <main className="mainSelection">
        {products.map((product, index) => (
          <div key={"produto-" + index}>
            <section>
              <ul className="sectionSelection">
                <div>
                  <img src={product.image} className="imgSelection" />
                </div>
                <div className="informationCardSelection">
                  <div className="nameProduct">{product.name}</div>
                  <p className="descrictionCardSelection">
                    {product.description}
                  </p>
                  <div className="valorProdcuctSelection">
                    De: R$ {product.oldPrice}
                  </div>
                  <div className="valueReal">Por: R$ {product.price}</div>
                  <button className="buttonCardPurchaseSelection">
                    Comprar
                  </button>
                </div>
              </ul>
            </section>
          </div>
        ))}
      </main>
      <div className="moreProductSelection">
        <button
          className="moreButtonCardsSelection"
          onClick={fetchMoreProducts}
        >
          Aqui ainda mais produtos !!!
        </button>

        <button
          onClick={closeProducts}
          id="toTop"
          title="Fechar"
          className="to-top"
        >
          ✘
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Selection;
