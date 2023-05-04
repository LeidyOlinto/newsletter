import { useEffect, useState } from "react";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("deu certo")
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
    <div className="produtos-container ">
      {products.map((product) => (
        <div key={product.id}>
        <section >
          <ul className="section">
            <div>
              <img src={product.image} className="imges" />
            </div>
            <div className="informationCard">
              <div className="nameProduct">{product.name}</div>
              <p className="descrictionCard">
                {product.description}
              </p>
              <div className="valorProdcuct">De: R${product.oldPrice}</div>
              <div className="valueReal">Por: R${product.price}</div>
              <div>ou duas vezes de R${product.value}</div>
              <button className="buttonCardPurchase">Comprar</button>
            </div>
          </ul>
          </section>
        </div>
      
      ))}
    </div>
  );

  // return(
  //  <div>
  //   {
  //      data.map((item) =>{
  //       return(
  //         <div >
  //         <ul className="section" >
  //         <div>
  //           <img src={product.img} className="imges" />
  //         </div>
  //         <div className="informationCard">
  //           <div className="nameProduct">{product.name}Nome do produto</div>
  //           <p className="descrictionCard">{product.description}
  //             a descrição do produto um poucom maior,com detalhes especificos e
  //             beneficios do produto
  //           </p>
  //           <div className="valorProdcuct">De: R$500,00</div>
  //           <div className="valueReal">Por: R$300,00</div>
  //           <div>ou duas vezes de R$150,00</div>
  //           <button className="buttonCardPurchase">Comprar</button>
  //         </div>
  //       </ul>
  //         </div>
  //       )
  //     })
  //   }
  //   </div>
  // )
}
export default Products;
