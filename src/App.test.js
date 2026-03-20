import React from "react";
import { getByRole, render, screen } from "@testing-library/react";
import App from "./App";
import codeFetcher from "./codeFetcher";
import userEvent from "@testing-library/user-event";
import CodeGenerator from "./CodeGenerator";

import Action from "./Action";

jest.mock("./codeFetcher");

describe("Renders App page.", () => {
    it("Renders the title,", () => {
        render(<App />)

        const title = screen.getByRole('heading', { level: 1, name: /AI-POWERED\s*CSS GENERATOR ⚡️/i });

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

    it("Renders the instructions.", async () => {
        render(
            <App />
        )

        const textaria = screen.getByTestId('textaria');
        const user = userEvent.setup();
        await user.type(textaria, 'Blue ball jumping');

        expect(textaria).toBeInTheDocument();
        expect(textaria).toHaveValue('Blue ball jumping');
    })

    it("Renders the button", () => {
        render(
            <App />
        )

        const button = screen.getByRole('button', { name: 'Code generator' });

        expect(button).toBeInTheDocument();
    })

    it("When the button is clicked, the code is generated.", async () => {
        const instructions = 'Blue ball jumping.';
        const mockSetValue = jest.fn();
        const generatedCode = '<style>.ball { background-color: blue; animation: jump 2s infinite; } @keyframes jump { 0% { transform: translateY(0); } 50% { transform: translateY(-50px); } 100% { transform: translateY(0); } }</style><div class="ball"></div>';
        codeFetcher.mockResolvedValue(generatedCode);


        render(
            <CodeGenerator
                propInstructions={instructions}
                propSetCodeViewerValue={mockSetValue}
            />
        );

        const button = screen.getByRole('button', { name: 'Code generator' });

        expect(button).toBeInTheDocument();
        const eventClick = userEvent.setup();
        await eventClick.click(button)

        expect(codeFetcher).toHaveBeenCalledWith(instructions);
        expect(mockSetValue).toHaveBeenCalledWith(generatedCode);
    })

    it('When the button is clicked, if the code generation fails, an alert is shown.', async () => {
        const instructions = 'Blue ball jumping.';
        const mockStateValue = jest.fn();
        codeFetcher.mockRejectedValue(new Error('Code generation failed. Check console for details.'))
        window.alert = jest.fn();

        render(
            <CodeGenerator
                propInstructions={instructions}
                propSetCodeViewerValue={mockStateValue}
            />
        );

        const button = screen.getByRole('button', { name: 'Code generator' });
        const eventClick = userEvent.setup();
        await eventClick.click(button);

        expect(codeFetcher).toHaveBeenCalledWith(instructions);
        expect(window.alert).toHaveBeenCalledWith('Code generation failed. Check console for details.');
    })

    it('When the button is clicked, the code is displayed in the code viewer.', async () => {
        const instructions = 'Blue ball jumping.';
        const generatedCode = '<style>.ball { background-color: blue; animation: jump 2s infinite; } @keyframes jump { 0% { transform: translateY(0); } 50% { transform: translateY(-50px); } 100% { transform: translateY(0); } }</style><div class="ball"></div>';
        codeFetcher.mockResolvedValue(generatedCode);

        render(
            <App />
        );

        const textarea = screen.getByTestId('textaria');
        const button = screen.getByRole('button', { name: 'Code generator' });
        const eventClick = userEvent.setup();
        await eventClick.type(textarea, instructions);
        await eventClick.click(button);

        const codeViewer = screen.getByTestId('code-viewer');

        expect(codeFetcher).toHaveBeenCalledWith(instructions);
        expect(codeViewer).toHaveTextContent(generatedCode);

    })

    it('When the button is clicked, the code is executed in the browser.', async () => {

        const instructions = 'Blue ball jumping.';
        const generatedCode = '<style>.ball { background-color: blue; animation: jump 2s infinite; } @keyframes jump { 0% { transform: translateY(0); } 50% { transform: translateY(-50px); } 100% { transform: translateY(0); } }</style><div class="ball"></div>';
        codeFetcher.mockResolvedValue(generatedCode);

        render(
            <>
                <CodeGenerator propInstructions={instructions} propSetCodeViewerValue={generatedCode} />
                <Action propCodeViewerValue={generatedCode} />
            </>
        );

        const button = screen.getByRole('button', { name: 'Code generator' });
        const user = userEvent.setup();
        await user.click(button);

        const iframe = screen.getByTestId("iframe");

        expect(codeFetcher).toHaveBeenCalledWith(instructions);
        expect(iframe).toBeInTheDocument();
        expect(iframe).toHaveAttribute("title", "Code Preview");
        expect(iframe).toHaveAttribute("srcDoc", generatedCode );
    })

})