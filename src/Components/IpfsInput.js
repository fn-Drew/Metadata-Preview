import { useEffect, useState } from "react"

import axios from "axios"

const IpfsInput = ({ setJsonMetadata, setLoading }) => {
  const [ipfsInput, setIpfsInput] = useState([''])

  if (Object.prototype.toString.call(ipfsInput) === "[object String]" && ipfsInput.substring(0, 7) === "ipfs://") {
    console.log(ipfsInput)
    setIpfsInput(`https://ipfs.io/ipfs/${ipfsInput.slice(7)}`)
  }

  const hook = () => {
    if (!ipfsInput) return null
    axios.get(ipfsInput).then((response) => {

      const jsonOutput = response.data
      setJsonMetadata(jsonOutput)
    })
  }
  useEffect(hook, [ipfsInput])

  const handleIpfsInput = (event) => {
    setIpfsInput(event.target.value)
    hook()
    setLoading(true)
  }

  return (
    <div className="pt-12">
      <textarea
        className="border-[1px] focus:border-sky-500 transition-colors focus:shadow-inner focus:outline-none mt-8 border-solid ml-6 rounded-b-lg border-[#69cdee] bg-[#edf9fe] p-[.95rem]"
        rows="5"
        value={ipfsInput}
        onInput={handleIpfsInput}
        placeholder="Input IPFS link..."
      />

    </div >
  )
}

export default IpfsInput
