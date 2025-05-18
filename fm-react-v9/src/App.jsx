import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header"
import { useContext, useState } from "react";
import { cartContext } from "./contexts";

const App = ()=>{
  const cartHook = useState([])
  
  return (
    <cartContext.Provider value={cartHook}>
      <div>
        <Header />
        <Order/>
        <PizzaOfTheDay />
      </div>
    </cartContext.Provider>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
