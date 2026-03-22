function CodeViewer({ propCodeViewerValue }) {
   
    return (
        <div className="code-viewer-container">
            <div className="direction-view">
                <h2>Generated Code</h2>
                <pre className="code-viewer" data-testid="code-viewer">{ propCodeViewerValue }</pre>
            </div>
        </div>
    )
}

export default CodeViewer;