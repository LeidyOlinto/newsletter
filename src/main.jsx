import ReactDOM from "react-dom/client";
import {BrowserRouter ,Route, Routes } from "react-router-dom"
import App from "./App";
//import Selection from "./assets/views/sectionSpecial/selection.jsx";
import "./Styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route  parth="/" element={<App />} />
//         <Route  parth="/Selection" element={<Selection /> } />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route  parth="/App" element={<App />} />
//         <Route  parth="/Selection" element={<Selection /> } />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );
