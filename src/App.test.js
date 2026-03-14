import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import App from "./App";


describe("Renders App page.", () => {
    it("Renders the title,", () => {
        render(<App />)

        const title = screen.getByText("AI-POWERED CSS GENERATOR");

        expect(title).toBeInTheDocument();
    })

    it("Renders paragraph.", () => {
        render(<App />)

        const paragraph = screen.getByText("Type what you want and watch the magic happen");

        expect(paragraph).toBeInTheDocument();
    })

    it("Render textarea field.", () => {
        render(
            <App />
        )

        const textaria = screen.getByTestId('textaria');

        expect(textaria).toBeInTheDocument();
    })

    it("Renders the button", () => {
        render(
            <App />
        )

        const button = screen.getByRole('button', { name: 'Code generator'});

        expect(button).toBeInTheDocument();
    })
})