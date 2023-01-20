import "./App.css"
import { useState, useEffect } from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

import Media from "./Components/render/Media"
import Properties from "./Components/render/Properties.js"
import NavBar from "./Components/NavBar"
import RawJsonInput from "./Components/RawJsonInput"
import IpfsInput from "./Components/IpfsInput"
import FileInput from "./Components/FileInput"

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

  useEffect(() => {
    setLoading(true)
  }, [jsonMetadata.image])

  const handleStringToJson = (event) => {
    setRawJson(event)
    setJsonMetadata(event)
  }

  return (
    <div className="w-full h-full bg-background-white font-body">
      <div className="grid grid-cols-5 gap-8 m-auto max-w-7xl">
        <div className="col-span-3">
          <div className="grid grid-flow-row pt-8 grid-rows-10 justify-items-center ">
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
                    <div className="flex row-span-5 w-11/12 text-accent-blue flex-col gap-4 place-items-center resize-y border-[1px] border-solid rounded-b-lg border-accent-blue bg-background-blue py-12 px-[1.58rem]">
                      <p> Choose an input method </p>
                    </div>
                  }
                />
              </Routes>
            </Router>
          </div>
          <div>
            <Properties setRawJson={setRawJson} rawJson={rawJson} jsonMetadata={jsonMetadata} setJsonMetadata={setJsonMetadata} />
          </div>
        </div>
        <div className="col-span-2">
          <Media jsonMetadata={jsonMetadata} loading={loading} setLoading={setLoading} />
        </div>
      </div>
    </div >
  )
}

export default App