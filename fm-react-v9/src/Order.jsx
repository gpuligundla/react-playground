import Pizza from "./Pizza";
import { useState, useEffect} from "react";
import Cart from "./Cart"
import { useContext } from "react";
import { cartContext } from "./contexts";

const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function Order(){
    const [pizzaTypes, setPizzaTypes] = useState([])
    const [pizzaType, setPizzaType] = useState("pepperoni")
    const [pizzaSize, setPizzaSize] = useState("M")
    const [cart, setCart] = useContext(cartContext)
    const [loading, setLoading] = useState(true)
    let selectedPizza, price;

    async function checkout() {
      setLoading(true)

      const res = await fetch('/api/order', {
        method: POST, 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cart)
      })
      setCart([])
      setLoading(false)
    }

    if(!loading){
      selectedPizza = pizzaTypes.find((pizza)=>pizza.id === pizzaType)
      price = intl.format(selectedPizza.sizes[pizzaSize])
    }
    useEffect(()=>{
      const fetchPizzas = async()=>{
        const res = await fetch('/api/pizzas')
        const jsonRes = await res.json()
        setPizzaTypes(jsonRes)
        setLoading(false)
      }
      fetchPizzas()
    }, [])

    return (
      <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCart([
              ...cart,
              { pizza: selectedPizza, size: pizzaSize, price },
            ]);
          }}
        >
          <div>
            <div>
              <label htmlFor="pizza-type">Pizza Type</label>
              <select
                onChange={(e) => setPizzaType(e.target.value)}
                name="pizza-type"
                value={pizzaType}
              >
                {pizzaTypes.map((pizza) => (
                  <option key={pizza.id} value={pizza.id}>
                    {pizza.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="pizza-size">Pizza Size</label>
              <div>
                <span>
                  <input
                    onChange={(e) => setPizzaSize(e.target.value)}
                    checked={pizzaSize === "S"}
                    type="radio"
                    name="pizza-size"
                    value="S"
                    id="pizza-s"
                  />
                  <label htmlFor="pizza-s">Small</label>
                </span>
                <span>
                  <input
                    onChange={(e) => setPizzaSize(e.target.value)}
                    checked={pizzaSize === "M"}
                    type="radio"
                    name="pizza-size"
                    value="M"
                    id="pizza-m"
                  />
                  <label htmlFor="pizza-m">Medium</label>
                </span>
                <span>
                  <input
                    onChange={(e) => setPizzaSize(e.target.value)}
                    checked={pizzaSize === "L"}
                    type="radio"
                    name="pizza-size"
                    value="L"
                    id="pizza-l"
                  />
                  <label htmlFor="pizza-l">Large</label>
                </span>
              </div>
            </div>
            <button type="submit">Add to Cart</button>
          </div>
          {loading ? (
            <h3>LOADING …</h3>
          ) : (
            <div className="order-pizza">
              <Pizza
                name={selectedPizza.name}
                description={selectedPizza.description}
                image={selectedPizza.image}
              />
              <p>{price}</p>
            </div>
          )}
        </form>
      </div>
      {loading ? <h2>LOADING …</h2> : <Cart checkout={checkout} cart={cart} />}
    </div>
    )
}