function CodeViewer({ propCodeViewerValue }) {
   
    return (
        <div className="code-viewer-container">
            <div className="direction-view">
                <h2>Code</h2>
                <p className="code-viewer" data-testid="code-viewer">{ propCodeViewerValue }</p>
            </div>
        </div>
    )
}

export default CodeViewer;