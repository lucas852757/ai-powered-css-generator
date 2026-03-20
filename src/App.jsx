import { useState } from "react";
import CodeViewer from "./CodeViewer";
import Description from "./Description";
import CodeGenerator from "./CodeGenerator";
import Instructions from "./Instructions";
import Title from "./Title";
import Action from "./Action";
import "./index.css"

function App() {
  const [instructions, setInstructions] = useState('');
  const [codeViewerValue, setCodeViewerValue] = useState([]);
  return (
    <div>
      <Title />
      <Description />
      <Instructions propSetInstructions={setInstructions} />
      <CodeGenerator propInstructions={instructions} propSetCodeViewerValue={setCodeViewerValue} />
      <div className="view">
        <CodeViewer propCodeViewerValue={codeViewerValue} />
        <Action propCodeViewerValue={codeViewerValue} />
      </div>
    </div>
  );
}

export default App;