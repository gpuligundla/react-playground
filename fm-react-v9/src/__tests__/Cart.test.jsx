import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Cart from '../Cart'

test("snapshot test when cart is empty", ()=>{
    const { asFragment } = render(<Cart cart={[]}/>)
    expect(asFragment()).toMatchSnapshot()
} )