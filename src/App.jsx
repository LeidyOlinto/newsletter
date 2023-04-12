import "./App.css";
import "./Styles.css";

import Header from "./assets/components/Header.jsx";
import ButtonsRotas from "./assets/components/ButtonsRotas.jsx";
import Register from "./assets/components/RegisterAlgorithm.jsx";
import Division from "./assets/components/Division.jsx";
import Cards from "./assets/components/Cards.jsx";
import Footer from "./assets/components/Footer.jsx";
 //import Selection from "./views/sectionSpecial/selection";

function App() {
  return (
    <div className="Container">
        <Header />
        <ButtonsRotas />
        <Register />
        <Division />
        <Cards />
        <Footer />
    </div>
  );
}

export default App;






// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={ <Home /> }/>
//         <Route path="/selection" element={ <Selection/> }/>
       
//       </Routes>
//     </div>
//   );
// }
// export default App;