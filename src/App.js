import "./App.css"
import { useState, useReducer } from "react"

import RawJsonInput from "./Components/RawJsonInput"

import Media from "./Components/render/Media"
import Description from "./Components/render/Description"
import Attributes from "./Components/render/Attributes"
import ExternalUrl from "./Components/render/ExternalUrl"
import Generator from "./Components/render/DemoGenerator"

function App() {
  const [rawJsonInput, setRawJsonInput] = useState([])

  const handleRawJsonInput = (event) => {
    event.preventDefault();
    setRawJsonInput(JSON.parse(event.target.value))
  }

  return (
    <div class="font-body grid h-full w-full w grid-cols-2 bg-[#fbfdff]">
      <div class="">
        <RawJsonInput handleUserInput={handleRawJsonInput} />
        <div class="m-16">
          <Generator userInput={rawJsonInput} setUserInput={setRawJsonInput} />
        </div>
      </div>
      <div>
        <Media userInput={rawJsonInput} />
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