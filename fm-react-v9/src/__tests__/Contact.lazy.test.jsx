import { render } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from 'vitest-fetch-mock'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route } from "../routes/contact.lazy";


const queryClient = new QueryClient()

const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()

test("can submit contact form", async ()=>{
    fetchMocker.mockResponse(JSON.stringify({status: "ok"}))

    const screen = render(
        <QueryClientProvider client={queryClient}>
            <Route.options.component />
        </QueryClientProvider>
    )

    const nameInput = screen.getByPlaceholderText("Name")
    const emailInput = screen.getByPlaceholderText("Email")
    const messageInput = screen.getByPlaceholderText("Message")

    const testData = {
        name: "GK",
        email: "gk@test.com",
        message: "Hello World"
    }
    nameInput.value = testData.name
    emailInput.value = testData.email
    messageInput.value = testData.message

    const btn = screen.getByRole("button")
    btn.click()

    const h3 = await screen.findByRole("heading", {level: 3})

    expect(h3.innerText).toContain("Submitted")


    const requests = fetchMocker.requests()
    expect(requests.length).toBe(1)
    expect(requests[0].url).toBe('/api/contact')
    expect(fetchMocker).toHaveBeenCalledWith("/api/contact", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(testData)
    })
    
})
