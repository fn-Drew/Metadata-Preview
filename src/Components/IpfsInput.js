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
    <div class="mx-14 w-full pt-12">
      <textarea
        class="h-5/6 w-5/6 resize-y border-[1px] border-solid border-[#69cdee] bg-[#edf9fe] p-2"
        value={ipfsInput}
        onInput={handleIpfsInput}
        placeholder="Input IPFS link..."
      />
    </div>
  )
}

export default IpfsInput
