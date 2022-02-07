import "./App.css";
import { useState, useReducer } from "react";

import RawJsonInput from "./Components/RawJsonInput";

import Media from "./Components/render/Media";
import Description from "./Components/render/Description";
import Attributes from "./Components/render/Attributes";
import ExternalUrl from "./Components/render/ExternalUrl";

function App() {
  const [rawJsonInput, setRawJsonInput] = useState([]);

  const handleRawJsonInput = (event) => {
    event.preventDefault();
    const rawJsonInput = JSON.parse(event.target.value);
    setRawJsonInput(rawJsonInput);
  };

  return (
    <div class="font-body grid h-full w-full grid-cols-2 bg-[#fbfdff]">
      <RawJsonInput handleUserInput={handleRawJsonInput} />
      <div>
        <Media userInput={rawJsonInput} />
        <ExternalUrl externalUrl={rawJsonInput.external_url} />
        <div class="text-center">
          <Description description={rawJsonInput.description} />
          <Attributes attributes={rawJsonInput.attributes} />
        </div>
      </div>
    </div>
  );
}

export default App;
