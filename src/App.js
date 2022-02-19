import "./App.css"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Media from "./Components/render/Media"
import Description from "./Components/render/Description"
import Attributes from "./Components/render/Attributes"
import ExternalUrl from "./Components/render/ExternalUrl"
import SchemaUI from "./Components/render/Properties.js"
import AnimationUrl from "./Components/render/AnimationUrl.js"
import NavBar from "./Components/NavBar"
import RawJsonInput from "./Components/RawJsonInput"
import IpfsInput from "./Components/IpfsInput"
import FileInput from "./Components/FileInput"

const App = () => {
  const [rawJsonInput, setRawJsonInput] = useState([])

  const handleRawJsonInput = (event) => {
    setRawJsonInput(JSON.parse(event.target.value))
  }

  return (
    <div class="grid gap-8 h-full w-full grid-cols-3 bg-[#fbfdff] font-body">
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="RawJsonInput"
              element={<RawJsonInput handleRawJsonInput={handleRawJsonInput} />}
            />
            <Route
              path="IPFSinput"
              element={<IpfsInput setRawJsonInput={setRawJsonInput} />}
            />
            <Route
              path="FileInput"
              element={<FileInput setRawJsonInput={setRawJsonInput} />}
            />
            <Route
              path="*"
              element={
                <div class="py-8 text-center text-4xl">
                  <p> Choose an input method </p>
                </div>
              }
            />
          </Routes>
        </Router>

        <div>
          <SchemaUI userInput={rawJsonInput} />
        </div>
      </div>
      <div class="col-span-2">
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

export default App
