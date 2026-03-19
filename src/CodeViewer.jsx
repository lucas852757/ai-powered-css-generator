function CodeViewer({ propCodeViewerValue }) {
   
    return (
        <>
            <h2>Generated Code:</h2>
            <p className="code-viewer" data-testid="code-viewer">{ propCodeViewerValue }</p>
        </>
    )
}

export default CodeViewer;