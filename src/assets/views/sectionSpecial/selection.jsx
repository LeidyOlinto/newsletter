import "./selection.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Selection() {

  return (
    
    <div className="containerSelection">
    <Header/>
     <div className="Selection"></div>
      <div className="textSelection">
        <span className="nameSelection">Olá, Fulano</span>
        <p className="textInforSelection">
          Fizemos uma lista especial de produtos apenas para você. Isso mesmo:
          nesta lista temos só produtos que você pode gostar. Seu amigo Ciclano
          lhe recomendou essa lista especial. Olha só:
        </p>
      </div>
      <main className="mainSelection">
      <div>
        <ul className="sectionSelection">
        <img src="" className="imgSelection" />
        <div className="informationCardSelection">
          <div className="nameProduct">Nome do produto</div>
          <p className="descrictionCardSelection">
            a descrição do produto um poucom maior,com detalhes especificos e
            beneficios do produto
          </p>
          <div className="valorProdcuctSelection">De: R$500,00</div>
          <div className="valueRealSelection">Por: R$300,00</div>
          <div>ou duas vezes de R$150,00</div>
          <button className="buttonCardPurchaseSelection">Comprar</button>
        </div>
        </ul>
        </div>
        <div>
        <ul className="sectionSelection">
          <img src="" className="imgSelection" />
          <div className="informationCardSelection">
            <div className="nameProduct">Nome do produto</div>
            <p className="descrictionCardSelection">
              a descrição do produto um poucom maior,com detalhes especificos e
              beneficios do produto
            </p>
            <div className="valorProdcuctSelection">De: R$500,00</div>
            <div className="valueRealSelection">Por: R$300,00</div>
            <div>ou duas vezes de R$150,00</div>
            <button className="buttonCardPurchaseSelection">Comprar</button>
          </div>
        </ul>
        </div>
      
      </main>
      <div className="moreProductSelection">
      <button className="moreButtonCardsSelection">Tem muito mais aqui. Vem ver!!</button>
    </div>
     <Footer/>
    </div>
  );
}
export default Selection;
