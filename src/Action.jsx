function Action({ propCodeViewerValue }) {
    return (
        <div className="view">
            <div className="direction-view">
                <h2>Preview</h2>
                <iframe data-testid="iframe" className="code-result" title="Code Preview" srcDoc={ propCodeViewerValue } />
            </div>
            
        </div>
    );
}

export default Action;