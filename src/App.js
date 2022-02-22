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
  const [jsonMetadata, setJsonMetadata] = useState([])
  const [userInput, setUserInput] = useState([
    { rawJson: '' },
    { ipfs: '' },
    { file: '' }
  ])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    console.debug("[Debug] (Page-Loading-Wrapper)", "Initializing Page + Data.");

    const $ = async () => {
      if (loading) {
        await Awaitable(1000)
        setLoading(false);
      }
    }

    $().finally(() => {
      console.debug("[Debug] (Page-Loading-Wrapper)", "All Wrapper Promise(s) have Settled.");
    });
  }, [loading]);


  const handleStringToJson = (event) => {
    setJsonMetadata(JSON.parse(event.target.value))
    setLoading(true)
  }

  return (
    <div className="grid gap-8 h-full w-full grid-cols-3 bg-[#fbfdff] font-body">

      <div>
        <div className="flex justify-center">
          <Router>
            <NavBar />
            <Routes>
              <Route
                path="RawJsonInput"
                element={<RawJsonInput handleStringToJson={handleStringToJson} />}
              />
              <Route
                path="IPFSinput"
                element={<IpfsInput setJsonMetadata={setJsonMetadata} setLoading={setLoading} />}
              />
              <Route
                path="FileInput"
                element={<FileInput setJsonMetadata={setJsonMetadata} loading={loading} setLoading={setLoading} />}
              />
              <Route
                path="*"
                element={
                  <div className="flex text-[#69cdee] flex-col gap-4 place-items-center resize-y border-[1px] border-solid rounded-b-lg border-[#69cdee] bg-[#edf9fe] py-12 px-[1.58rem] ml-6 pt-12 mt-20">
                    <p> Choose an input method </p>
                  </div>
                }
              />
            </Routes>
          </Router>
        </div>

        <div>
          <SchemaUI userInput={jsonMetadata} />
        </div>
      </div>

      <div className="col-span-2">
        <Media userInput={jsonMetadata} loading={loading} setLoading={setLoading} />
        <AnimationUrl animationUrl={jsonMetadata.animation_url} loading={loading} />
        <ExternalUrl externalUrl={jsonMetadata.external_url} />
        <div className="text-center">
          <Description description={jsonMetadata.description} />
          <Attributes attributes={jsonMetadata.attributes} />
        </div>
      </div>
    </div>
  )
}

export default App
