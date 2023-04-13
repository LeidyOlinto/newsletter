import { useEffect, useState } from "react";
import "./Cards.css";

function Cards() {
  const [cards, setCards] = useState('');

  const option = { method: "GET" };
  useEffect(() => {
  
  fetch(
    "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1",
    option, console.log(option,'olaaaaa')
  )
    .then((response) => response.json())
    .then((response) => setCards(response))
    .catch((err) => console.error(err));
  },[])

  return (
    <section className="sectiontable">
      <div className="cardsProduts">
        <ul className="section">
          <div>
            <img src="" className="imges" />
          </div>
          <div className="informationCard">
            <div className="nameProduct">Nome do produto</div>
            <p className="descrictionCard">
              a descrição do produto um poucom maior,com detalhes especificos e
              beneficios do produto
            </p>
            <div className="valorProdcuct">De: R$500,00</div>
            <div className="valueReal">Por: R$300,00</div>
            <div>ou duas vezes de R$150,00</div>
            <button className="buttonCardPurchase">Comprar</button>
          </div>
        </ul>
        <ul className="section">
          <img src="" className="img" />
          <div className="informationCard">
            <div className="nameProduct">Nome do produto</div>
            <p className="descrictionCard">
              a descrição do produto um poucom maior,com detalhes especificos e
              beneficios do produto
            </p>
            <div className="valorProdcuct">De: R$500,00</div>
            <div className="valueReal">Por: R$300,00</div>
            <div>ou duas vezes de R$150,00</div>
            <button className="buttonCardPurchase">Comprar</button>
          </div>
        </ul>
        <ul className="section">
          <img src="" className="img" />
          <div className="informationCard">
            <div className="nameProduct">Nome do produto</div>
            <p className="descrictionCard">
              a descrição do produto um poucom maior,com detalhes especificos e
              beneficios do produto
            </p>
            <div className="valorProdcuct">De: R$500,00</div>
            <div className="valueReal">Por: R$300,00</div>
            <div>ou duas vezes de R$150,00</div>
            <button className="buttonCardPurchase">Comprar</button>
          </div>
        </ul>
        <ul className="section">
          <img src="" className="img" />
          <div className="informationCard">
            <div className="nameProduct">Nome do produto</div>
            <p className="descrictionCard">
              a descrição do produto um poucom maior,com detalhes especificos e
              beneficios do produto
            </p>
            <div className="valorProdcuct">De: R$500,00</div>
            <div className="valueReal">Por: R$300,00</div>
            <div>ou duas vezes de R$150,00</div>
            <button className="buttonCardPurchase">Comprar</button>
          </div>
        </ul>
      </div>

      <div>
        <div className="cardsProduts">
          <ul className="section">
            <img src="" className="img" />
            <div className="informationCard">
              <div className="nameProduct">Nome do produto</div>
              <p className="descrictionCard">
                a descrição do produto um poucom maior,com detalhes especificos
                e beneficios do produto
              </p>
              <div className="valorProdcuct">De: R$500,00</div>
              <div className="valueReal">Por: R$300,00</div>
              <div>ou duas vezes de R$150,00</div>
              <button className="buttonCardPurchase">Comprar</button>
            </div>
          </ul>
          <ul className="section">
            <img src="" className="img" />
            <div className="informationCard">
              <div className="nameProduct">Nome do produto</div>
              <p className="descrictionCard">
                a descrição do produto um poucom maior,com detalhes especificos
                e beneficios do produto
              </p>
              <div className="valorProdcuct">De: R$500,00</div>
              <div className="valueReal">Por: R$300,00</div>
              <div>ou duas vezes de R$150,00</div>
              <button className="buttonCardPurchase">Comprar</button>
            </div>
          </ul>
          <ul className="section">
            <img src="" className="img" />
            <div className="informationCard">
              <div className="nameProduct">Nome do produto</div>
              <p className="descrictionCard">
                a descrição do produto um poucom maior,com detalhes especificos
                e beneficios do produto
              </p>
              <div className="valorProdcuct">De: R$500,00</div>
              <div className="valueReal">Por: R$300,00</div>
              <div>ou duas vezes de R$150,00</div>
              <button className="buttonCardPurchase">Comprar</button>
            </div>
          </ul>
          <ul className="section">
            <img src="" className="img" />
            <div className="informationCard">
              <div className="nameProduct">Nome do produto</div>
              <p className="descrictionCard">
                a descrição do produto um poucom maior,com detalhes especificos
                e beneficios do produto
              </p>
              <div className="valorProdcuct">De: R$500,00</div>
              <div className="valueReal">Por: R$300,00</div>
              <div>ou duas vezes de R$150,00</div>
              <button className="buttonCardPurchase">Comprar</button>
            </div>
          </ul>
        </div>
      </div>
      <div className="moreProduct">
        <button className="moreButtonCards">Ainda mais produtos aqui!</button>
      </div>

      <div>
        <span className="especialSelection">
          <p className="selectionD"></p>
          <p className="titleCards">Compartilhe a novidade</p>
          <p className="selectionL"></p>
        </span>
      </div>
    </section>
  );
}
export default Cards;
