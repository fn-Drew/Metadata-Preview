
import { useEffect, useState } from "react"

import axios from "axios"

const IpfsInput = ({ setRawJsonInput }) => {
  const [ipfsInput, setIpfsInput] = useState([])

  const hook = () => {
    axios
      .get(ipfsInput)
      .then(response => {
        const jsonOutput = response.data
        setRawJsonInput(jsonOutput)
        console.log(jsonOutput)
      })
  }
  useEffect(hook, [])

  const handleIpfsInput = (event) => {
    setIpfsInput(event.target.value)
    hook()
  }

  return (
    <div class="py-2 mx-14 w-full">
      <textarea class="w-5/6 h-5/6 resize-y" value={ipfsInput} onInput={handleIpfsInput} placeholder="Input IPFS link..." />
    </div>
  )

}

export default IpfsInput