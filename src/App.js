import "./App.css"
import { useState, useReducer } from "react"

import RawJsonInput from "./Components/RawJsonInput"

import Media from "./Components/render/Media"
import Description from "./Components/render/Description"
import Attributes from "./Components/render/Attributes"
import ExternalUrl from "./Components/render/ExternalUrl"
import SchemaUI from "./Components/render/SchemaUI.js"
import AnimationUrl from "./Components/render/AnimationUrl.js"

function App() {
  const [rawJsonInput, setRawJsonInput] = useState([])

  const handleRawJsonInput = (event) => {
    setRawJsonInput(JSON.parse(event.target.value))
  }

  return (
    <div class="font-body grid h-full w-full w grid-cols-2 bg-[#fbfdff]">
      <div class="">
        <RawJsonInput handleUserInput={handleRawJsonInput} />
        <div>
          <SchemaUI userInput={rawJsonInput} />
        </div>
      </div>
      <div>
        <Media userInput={rawJsonInput} />
        <AnimationUrl animationUrl={rawJsonInput.animation_url} />
        <ExternalUrl externalUrl={rawJsonInput.external_url} />
        <div class="text-center">
          <Description description={rawJsonInput.description} />
          <Attributes attributes={rawJsonInput.attributes} />
        </div>
      </div>
    </div>
  )
}

export default App;