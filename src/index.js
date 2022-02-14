import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"

import handleRawJsonInput from "./App"
import setRawJsonInput from "./App"
import RawJsonInput from "./Components/RawJsonInput"
import IpfsInput from "./Components/IpfsInput"
import FileInput from "./Components/FileInput"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
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
              <div class="py-8 text-center text-5xl">
                <p> There's nothing here! </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
)
