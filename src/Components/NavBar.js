import { LaptopWindows } from "@material-ui/icons"
import { useState } from "react"

import IpfsInput from "./IpfsInput"
import RawJsonInput from "./RawJsonInput"

const NavBar = ({ setRawJsonInput, handleRawJsonInput }) => {
  const [inputOption, setInputOption] = useState('RawJsonInput')

  const Results = () => {
    if (inputOption === "RawJsonInput") {
      return (
        <RawJsonInput handleUserInput={handleRawJsonInput} />
      )
    } else if (inputOption === "IpfsInput") {
      return (
        <IpfsInput setRawJsonInput={setRawJsonInput} />
      )
    } else if (inputOption === "FileInput") {
      return <div> File Input Placeholder </div>
    } else return null
  }

  return (
    <div>
      <input type="submit" value="Raw JSON" onClick={() => setInputOption("RawJsonInput")} />
      <input type="submit" value="Ipfs" onClick={() => setInputOption("IpfsInput")} />
      <input type="submit" value="File" onClick={() => setInputOption("FileInput")} />
      <Results />
    </div>
  )
}

export default NavBar