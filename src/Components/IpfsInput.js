import { useEffect, useState } from "react"

import axios from "axios"

const IpfsInput = ({ setRawJsonInput }) => {
  const [ipfsInput, setIpfsInput] = useState([])

  const hook = () => {
    axios.get(ipfsInput).then((response) => {
      const jsonOutput = response.data
      setRawJsonInput(jsonOutput)
    })
  }
  useEffect(hook, [ipfsInput])

  const handleIpfsInput = (event) => {
    setIpfsInput(event.target.value)
    hook()
  }

  return (
    <div class="pt-12">
      <textarea
        class="border-[1px] border-solid rounded-b-lg border-[#69cdee] bg-[#edf9fe] p-4"
        rows="5"
        value={ipfsInput}
        onInput={handleIpfsInput}
        placeholder="Input IPFS link..."
      />
    </div>
  )
}

export default IpfsInput
