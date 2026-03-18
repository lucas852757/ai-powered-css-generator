import { useState } from "react";
import CodeViewer from "./CodeViewer";
import Description from "./Description";
import CodeGenerator from "./CodeGenerator";
import Instructions from "./Instructions";
import Title from "./Title";
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
      <CodeViewer propCodeViewerValue={codeViewerValue} />
    </div>
  );
}

export default App;