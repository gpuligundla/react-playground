import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }){
    const elref = useRef(null)
    if(!elref.current){
        elref.current = document.createElement("div")
    }

    useEffect(()=>{
        const modalRoot = document.getElementById("modal")
        modalRoot.append(elref.current)

        return () => modalRoot.removeChild(elref.current);
    }, [])

    return createPortal(<div>{children}</div>, elref.current)
}