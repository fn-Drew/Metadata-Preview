import { LaptopWindows } from "@material-ui/icons"
import { useState } from "react"

import IpfsInput from "./IpfsInput"
import RawJsonInput from "./RawJsonInput"

const NavBar = ({ setRawJsonInput, handleRawJsonInput }) => {
  const [displayRawJsonInput, setDisplayRawJsonInput] = useState(false)
  const [displayIpfsInput, setDisplayIpfsInput] = useState(false)
  const [displayFileInput, setDisplayFileInput] = useState(false)


  const showRawJsonInput = () => {
    setDisplayRawJsonInput(!displayRawJsonInput);
    setDisplayIpfsInput(false);
    setDisplayFileInput(false);
  }
  const showIpfsInput = () => {
    setDisplayRawJsonInput(false);
    setDisplayIpfsInput(!displayIpfsInput);
    setDisplayFileInput(false);
  }

  const showFileInput = () => {
    setDisplayRawJsonInput(false);
    setDisplayIpfsInput(false);
    setDisplayFileInput(!displayFileInput);
  }

  return (
    <div>
      <input type="submit" value="Raw JSON" onClick={showRawJsonInput} />
      <input type="submit" value="Ipfs" onClick={showIpfsInput} />
      <input type="submit" value="File" onClick={showFileInput} />
      <div>
        {displayRawJsonInput && <RawJsonInput handleUserInput={handleRawJsonInput} />}
        {displayIpfsInput && <IpfsInput setRawJsonInput={setRawJsonInput} />}
        {displayFileInput && <div>File Input Placeholder</div>}
      </div>
    </div>
  )
}

export default NavBar