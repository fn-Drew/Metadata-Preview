import "./App.css"
import { useState, useEffect } from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Media from "./Components/render/Media"
import Properties from "./Components/render/Properties.js"
import NavBar from "./Components/NavBar"
import RawJsonInput from "./Components/RawJsonInput"
import IpfsInput from "./Components/IpfsInput"
import FileInput from "./Components/FileInput"
import Attributes from "./Components/render/Attributes"

const App = () => {
  const [jsonMetadata, setJsonMetadata] = useState(false)
  const [rawJson, setRawJson] = useState(null)
  const [ipfsInput, setIpfsInput] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    console.debug("[Debug] (Page-Loading-Wrapper)", "Initializing Page + Data.");

    const $ = async () => {
      if (loading) {
        // await Awaitable(1000)
        // setLoading(false);
      }
    }

    $().finally(() => {
      console.debug("[Debug] (Page-Loading-Wrapper)", "All Wrapper Promise(s) have Settled.");
    });
  }, [loading]);

  // start spinners when image changes
  useEffect(() => {
    setLoading(true)
  }, [jsonMetadata.image])

  const handleStringToJson = (event) => {
    setRawJson(event)
    setJsonMetadata(event)
  }

  return (
    <div className="bg-background-white font-body">
      <div className="grid grid-cols-2 divide-solid max-w-7xl gap-32 m-auto">
        <div className="pt-14">
          <Router>
            <NavBar />
            <Routes>
              <Route
                path="/RawJsonInput"
                element={<RawJsonInput rawJson={rawJson} setRawJson={setRawJson} setJsonMetadata={setJsonMetadata} />}
              />
              <Route
                path="/IPFSinput"
                element={<IpfsInput ipfsInput={ipfsInput} setIpfsInput={setIpfsInput} setJsonMetadata={setJsonMetadata} setLoading={setLoading} handleStringToJson={handleStringToJson} setRawJson={setRawJson} />}
              />
              <Route
                path="/FileInput"
                element={<FileInput setJsonMetadata={setJsonMetadata} loading={loading} setLoading={setLoading} setRawJson={setRawJson} />}
              />
              <Route
                exact path="/"
                element={
                  <div className=" flex justify-center items-center text-accent-blue text-center h-5/6 border-[1px] border-solid rounded-b-lg border-accent-blue bg-background-blue text-2xl">
                    <p> Choose an input method </p>
                  </div>
                }
              />
            </Routes>
          </Router>
        </div>
        <div className="">
          <Media jsonMetadata={jsonMetadata} loading={loading} setLoading={setLoading} />
        </div>
        <div className="">
          <Properties setRawJson={setRawJson} rawJson={rawJson} jsonMetadata={jsonMetadata} setJsonMetadata={setJsonMetadata} />
        </div>
        <div className="text-center">
          <div className="text-4xl pb-8"> Attributes </div>
          <Attributes attributes={jsonMetadata.attributes} loading={loading} setLoding={setLoading} />
        </div>
      </div>
    </div >
  )
}

export default App