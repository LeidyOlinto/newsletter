import "./ButtonsRotas.css";
import { NavLink } from 'react-router-dom';
import Footer from "./Footer";

function ButtonsRotas(props) {
  return (
    
    <div>
      <div className="buttonsBuscas">
      <div>
      <NavLink to={'/'}>
        <button className="buttons">Conheça a Linx</button>
        </NavLink>
      
        <button  className="buttons">Ajude o algoritimo</button>
        </div>
        <div>
          <button className="buttons"> Seus produtos</button>
          <button className="buttons">Compartilhe</button>
        </div>
      </div>
    </div>
  );
}
export default ButtonsRotas;
