import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./context/DataContext.jsx";
import SelectContext from "./context/SelectContext.jsx";
import BasketContext from "./context/BasketContext.jsx";
import LocationContext from "./context/LocationContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataContext>
     <SelectContext>
      <BasketContext>
       <LocationContext>
        <App />
       </LocationContext>
      </BasketContext>
     </SelectContext>
    </DataContext>
  </BrowserRouter>
);
