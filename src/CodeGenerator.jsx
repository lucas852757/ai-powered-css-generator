import codeFetcher from "./codeFetcher";

function CodeGenerator({ propInstructions, propSetCodeViewerValue }) {
    const handleClick = async () => {
        try {
            const response = await codeFetcher(propInstructions);
            // console.log(response);
            propSetCodeViewerValue(response);

        } catch (error) {
            console.error("Code generation failed", error);
            alert(
                error?.message ||
                    "Code generation failed. Check console for details."
            );
        }
    };

    return (
        <button onClick={handleClick}>Code generator</button>
    );
}

export default CodeGenerator;