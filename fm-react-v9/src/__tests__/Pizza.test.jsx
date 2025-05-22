import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from '../Pizza'

afterEach(cleanup)

test("This is a test to verify Pizza component for having alt tags", async ()=>{
    const name = "Test pizza name"
    const src = "https://picsum.photos/213"
    const screen = render(
        <Pizza name={name} image={src} description="pizza description" />
    )

    const img = screen.getByRole('img')

    expect(img.src).toBe(src)
    expect(img.alt).toBe(name)
    
})

test("Test to check the default image for pizza", ()=>{
    const name = "Test default pizza image"
    const screen = render(
        <Pizza name={name} description="pizza description" />
    )

    const img = screen.getByRole('img')

    expect(img.src).not.toBe("")
})

