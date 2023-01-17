import { useEffect } from "react"

const IpfsInput = ({ ipfsInput, setIpfsInput, setJsonMetadata, setLoading, handleStringToJson, setRawJson }) => {

  if (Object.prototype.toString.call(ipfsInput) === "[object String]" && ipfsInput.substring(0, 7) === "ipfs://") {
    setIpfsInput(`https://cloudflare-ipfs.com/ipfs/${ipfsInput.slice(7)}`)
  }

  const hook = () => {
    if (!ipfsInput) return null
    fetch(ipfsInput)
      .then(response => response.json())
      .then((data) => {
        setJsonMetadata(data)
        setRawJson(JSON.stringify(data, null, 4))
      })
  }
  useEffect(hook, [ipfsInput, setRawJson, setJsonMetadata])

  const handleIpfsInput = (event) => {
    setIpfsInput(event.target.value)
    setLoading(true)
    handleStringToJson(event)
  }

  return (
    <div className="w-11/12 row-span-5">
      <textarea
        className="string-input"
        rows="5"
        value={ipfsInput}
        onInput={handleIpfsInput}
        placeholder="Input IPFS link..."
      />
    </div >
  )
}

export default IpfsInput