import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = ()=>{
  return (
    <div>
      <h1 className="logo">Padre Geno's</h1>
      <Order/>
      <PizzaOfTheDay />
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
