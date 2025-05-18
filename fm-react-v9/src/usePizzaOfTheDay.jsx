import { useState, useEffect } from "react"

export const usePizzaOfTheDay = ()=>{
    const [pizzaOfDay, setPizzaOfDay] = useState(null)

    useEffect(()=>{
        const pizza = async ()=>{
            const res = await fetch('/api/pizza-of-the-day')
            const jsonRes = await res.json()
            setPizzaOfDay(jsonRes)
        }
        pizza()
    },[])

    return pizzaOfDay
}