import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"

import handleStringToJson from "./App"
import setJsonMetadata from "./App"
import RawJsonInput from "./Components/RawJsonInput"
import IpfsInput from "./Components/IpfsInput"
import FileInput from "./Components/FileInput"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)