import { useState } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import PizzaOfTheDay from "../PizzaOfTheDay";
import { cartContext } from "../contexts";
import Header from '../Header'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Route = createRootRoute({
    component: ()=>{
        const cartHook = useState([])
        return (
            <>
            <cartContext.Provider value={cartHook}>
                <div>
                    <Header />
                    <Outlet/>
                    <PizzaOfTheDay />
                </div>
            </cartContext.Provider>
            <TanStackRouterDevtools />
            <ReactQueryDevtools />
            </>
        )
    }
})