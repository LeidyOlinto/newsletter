import "./App.css";
import "./Styles.css";

import Header from "./assets/components/Header.jsx";
import ButtonsRotas from "./assets/components/ButtonsRotas.jsx";
import Register from "./assets/components/RegisterAlgorithm.jsx";
import Division from "./assets/components/Division.jsx";
import Cards from "./assets/components/Cards.jsx";
import Compartilhe from "./assets/components/compartilhe.jsx";
import Footer from "./assets/components/Footer.jsx";
//import InviteFriends from "./assets/components/formik.jsx";


function App() {
  return (
    <div className="Container">
        <Header />
        <ButtonsRotas />
        <Register/>
        <Division />
        <Cards />
        <Compartilhe />
        <Footer />
    </div>
  );
}

export default App;
