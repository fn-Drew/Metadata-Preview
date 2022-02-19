import "./App.css"
import { useState, useEffect } from "react"
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
import Awaitable from "./Components/Awaitable"

const App = () => {
  const [rawJsonInput, setRawJsonInput] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    console.debug("[Debug] (Page-Loading-Wrapper)", "Initializing Page + Data.");

    const $ = async () => {
      if (!loading) {
        await Awaitable(1000)
        setLoading(true);
      }
    }

    $().finally(() => {
      console.debug("[Debug] (Page-Loading-Wrapper)", "All Wrapper Promise(s) have Settled.");
    });
  }, [loading]);


  const handleRawJsonInput = (event) => {
    setRawJsonInput(JSON.parse(event.target.value))
    setLoading(false)
  }

  return (
    <div class="grid gap-8 h-full w-full grid-cols-3 bg-[#fbfdff] font-body">

      <div>
        <div class="flex justify-center">
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
                element={<FileInput setRawJsonInput={setRawJsonInput} loading={loading} setLoading={setLoading} />}
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
        </div>

        <div>
          <SchemaUI userInput={rawJsonInput} />
        </div>
      </div>

      <div class="col-span-2">
        <Media userInput={rawJsonInput} loading={loading} setLoading={setLoading} />
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
