import "./App.css"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Media from "./Components/render/Media"
import Description from "./Components/render/Description"
import Attributes from "./Components/render/Attributes"
import Properties from "./Components/render/Properties.js"
import AnimationUrl from "./Components/render/AnimationUrl.js"
import NavBar from "./Components/NavBar"
import RawJsonInput from "./Components/RawJsonInput"
import IpfsInput from "./Components/IpfsInput"
import FileInput from "./Components/FileInput"
import Awaitable from "./Components/Awaitable"

const App = () => {
  const [jsonMetadata, setJsonMetadata] = useState(false)

  const [rawJson, setRawJson] = useState([])
  const [ipfsInput, setIpfsInput] = useState([])

  const [loading, setLoading] = useState(false)

  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //   document.documentElement.classList.add('dark')
  // } else {
  //   document.documentElement.classList.remove('dark')
  // }

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

  const handleRawJsonInput = (event) => {
    setRawJson(event.target.value)
    handleStringToJson(event)
  }

  const handleStringToJson = (event) => {
    setJsonMetadata(JSON.parse(event.target.value))
    setRawJson(event.target.value)
    setLoading(true)
  }

  return (
    <div className="grid gap-8 h-screen w-screen grid-cols-3 bg-[#fbfdff] font-body">

      <div className="col-span-2">
        <div className="grid grid-flow-row pt-8 grid-rows-10 justify-items-center ">
          <Router>
            <NavBar />
            <Routes>
              <Route
                path="RawJsonInput"
                element={<RawJsonInput rawJson={rawJson} setRawJson={setRawJson} handleStringToJson={handleRawJsonInput} />}
              />
              <Route
                path="IPFSinput"
                element={<IpfsInput ipfsInput={ipfsInput} setIpfsInput={setIpfsInput} setRawJson={setRawJson} handleStringToJson={handleStringToJson} setJsonMetadata={setJsonMetadata} setJsonMetadata={setJsonMetadata} setLoading={setLoading} />}
              />
              <Route
                path="FileInput"
                element={<FileInput setJsonMetadata={setJsonMetadata} loading={loading} setLoading={setLoading} setRawJson={setRawJson} />}
              />
              <Route
                path="*"
                element={
                  <div className="flex row-span-5 w-2/3 text-[#69cdee] flex-col gap-4 place-items-center resize-y border-[1px] border-solid rounded-b-lg border-[#69cdee] bg-[#edf9fe] py-12 px-[1.58rem]">
                    <p> Choose an input method </p>
                  </div>
                }
              />
            </Routes>
          </Router>
        </div>

        <div>
          <Properties setRawJson={setRawJson} jsonMetadata={jsonMetadata} setJsonMetadata={setJsonMetadata} />
        </div>
      </div>

      <div className="col-span-1">
        <Media jsonMetadata={jsonMetadata} loading={loading} setLoading={setLoading} />
        <AnimationUrl animationUrl={jsonMetadata.animation_url} loading={loading} />
        <div className="text-center">
          {/* <Description description={jsonMetadata.description} /> */}
          <Attributes attributes={jsonMetadata.attributes} />
        </div>
      </div>

    </div>
  )
}

export default App
