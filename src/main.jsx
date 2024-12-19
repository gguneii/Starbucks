import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import DataContext from "./context/DataContext.jsx";
import SelectContext from "./context/SelectContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataContext>
     <SelectContext>
     <App />
     </SelectContext>
    </DataContext>
  </BrowserRouter>
);
