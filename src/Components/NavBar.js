import { useState } from "react"

import IpfsInput from "./IpfsInput"
import RawJsonInput from "./RawJsonInput"

const NavBar = ({ setRawJsonInput, handleRawJsonInput }) => {
  const [displayRawJsonInput, setDisplayRawJsonInput] = useState(false)
  const [displayIpfsInput, setDisplayIpfsInput] = useState(false)
  const [displayFileInput, setDisplayFileInput] = useState(false)

  const showRawJsonInput = () => {
    setDisplayRawJsonInput(true);
    setDisplayIpfsInput(false);
    setDisplayFileInput(false);
  }
  const showIpfsInput = () => {
    setDisplayRawJsonInput(false);
    setDisplayIpfsInput(true);
    setDisplayFileInput(false);
  }

  const showFileInput = () => {
    setDisplayRawJsonInput(false);
    setDisplayIpfsInput(false);
    setDisplayFileInput(true);
  }

  return (
    <div>
      <ul class="flex border-b">
        <li class="-mb-px-px mr-1">
          <input class="inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" type="submit" value="Raw JSON" onClick={showRawJsonInput} />
        </li>
        <li class="mr-1">
          <input class="inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" type="submit" value="Ipfs" onClick={showIpfsInput} />
        </li>
        <li class="mr-1">
          <input class="inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" type="submit" value="File" onClick={showFileInput} />
        </li>
      </ul>
      <div>
        {displayRawJsonInput && <RawJsonInput handleUserInput={handleRawJsonInput} />}
        {displayIpfsInput && <IpfsInput setRawJsonInput={setRawJsonInput} />}
        {displayFileInput && <div>File Input Placeholder</div>}
      </div>
    </div>
  )
}

export default NavBar