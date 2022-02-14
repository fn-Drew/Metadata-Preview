import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App'

import handleRawJsonInput from "./App"
import setRawJsonInput from "./App"
import RawJsonInput from './Components/RawJsonInput'
import IpfsInput from './Components/IpfsInput'
import FileInput from "./Components/FileInput"

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="RawJsonInput" element={<RawJsonInput handleUserInput={handleRawJsonInput} />} />
          <Route path="IPFSinput" element={<IpfsInput setRawJsonInput={setRawJsonInput} />} />
          <Route path="FileInput" element={<FileInput setRawJsonInput={setRawJsonInput} />} />
          <Route
            path="*"
            element={
              <div class="text-5xl text-center py-8">
                <p> There's nothing here! </p>
              </div>
            }
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)