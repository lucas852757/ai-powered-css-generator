import Description from "./Description";
import CodeGenerator from "./GeneratorCode";
import Instructions from "./Instructions";
import Title from "./Title";
import "./index.css"

function App() {
  return (
    <div>
      <Title />
      <Description />
      <Instructions />
      <CodeGenerator />
    </div>
  );
}

export default App;