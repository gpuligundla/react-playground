import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = ()=>{
  return (
    <div>
      <h1 className="logo">Padre Geno's</h1>
      <Pizza name="Pizza1" description="Pizza sample 1" image="/public/pizzas/pepperoni.webp" />
      <Pizza name="Pizza2" description="Pizza sample 2" image="/public/pizzas/hawaiian.webp"/>
      <Pizza name="Pizza3" description="Pizza sample 3"image="/public/pizzas/big_meat.webp"/>
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
