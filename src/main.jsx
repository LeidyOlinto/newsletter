import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Selection from "./assets/views/sectionSpecial/selection.jsx";
import "./Styles.css";

// import { router } from './assets/components/routes';

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter>
      <Routes>
        <Route  parth="/" element={<App />} />
        <Route  parth="/Selection" element={<Selection /> } />
      </Routes>
    </BrowserRouter>

);
